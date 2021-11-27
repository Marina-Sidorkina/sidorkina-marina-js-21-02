import React, { useContext, useEffect, useRef } from 'react';
import './UserModalForm.scss';
import {
  Button, Form, Input
} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IDummyUserFull } from '../../../../api/dummyApi/@types/dummyApi';
import { DEFAULT_IMAGE, IMAGE_CHANGE_CHECK_VALUE } from '../../../../constants/components';
import { getGenderFieldValue, isEmptyObject, processDate } from '../../../../utils/components';
import {
  closeUserModalAction, hideLoadingAction, hideUserModalErrorAction,
  processUserModalPicture, resetValuesAction, showLoadingAction, showUserModalErrorAction,
  updateUserModalDateOfBirthAction,
  updateUserModalGenderAction,
  updateUserModalNameAction,
  updateUserModalPhoneAction, updateUserModalPictureAction
} from '../../../../redux/actions/userModalForm';
import { BTN_DARK_STYLE, RULES } from '../../../../antDesignSettings/userModalForm';
import { updateUser } from '../../../../api/dummyApi/dummyApi';
import { createUpdatedUserData } from '../../../../utils/api';
import { updateUserCardAction } from '../../../../redux/actions/userInfo';
import { getExpirationDate } from '../../../../utils/redux';
import { updateAuthorizedUserDataAction } from '../../../../redux/actions/login';
import { ThemeContext } from '../../../../contexts/ThemeContext';

interface IUserModalFormProps {
  user: IDummyUserFull;
  nameValue: string;
  genderValue: string;
  dateOfBirthValue: string;
  registrationDateValue: string;
  emailValue: string;
  phoneValue: string;
  updateNameValue: Function;
  updateGenderValue: Function;
  updateDateOfBirthValue: Function;
  updatePhoneValue: Function;
  updatePictureValue: Function;
  pictureValue: string;
  resetImage: Function;
  resetValues: Function;
  isOpened: boolean;
  updateUserInfo: Function;
  closeModal: Function;
  updateAuthorizedUserData: Function;
  showLoading: Function;
  hideLoading: Function;
  error: boolean;
  showUserModalError: Function;
  hideUserModalError: Function;
}

interface IUserFormValues {
  name: string;
  gender: string;
  birthDate: string;
  registrationDate: string;
  email: string;
  tel: string;
}

const UserModalForm = (props: IUserModalFormProps) => {
  const {
    user, nameValue, genderValue, dateOfBirthValue, registrationDateValue,
    emailValue, phoneValue, updateNameValue, updateGenderValue, updateDateOfBirthValue,
    updatePhoneValue, updatePictureValue,
    pictureValue, resetImage, resetValues, isOpened, updateUserInfo, closeModal,
    updateAuthorizedUserData, showLoading, hideLoading, error, showUserModalError, hideUserModalError
  } = props;

  const {
    id, firstName, lastName, picture, gender, dateOfBirth, registerDate, email, phone
  } = user;

  const [form] = Form.useForm();
  const fileInputElement = useRef() as any;
  const themeContext = useContext(ThemeContext);
  const btnStyle = themeContext.darkTheme
    ? BTN_DARK_STYLE : {};

  useEffect(() => {
    resetValues();
    resetImage(picture);
    form.resetFields();
    if (fileInputElement.current) fileInputElement.current.value = '';
  }, [isOpened]);

  const onFormSubmit = (values: IUserFormValues) => {
    const updatedData = createUpdatedUserData({
      ...values,
      image: pictureValue === picture
        ? IMAGE_CHANGE_CHECK_VALUE
        : pictureValue
    });
    if (!isEmptyObject(updatedData)) {
      showLoading();
      updateUser(updatedData, id)
        .then((response: IDummyUserFull) => {
          updateUserInfo(response);
          updateAuthorizedUserData(response);
          closeModal();
          hideLoading();
          hideUserModalError();
          document.cookie = `picture=${response.picture || DEFAULT_IMAGE}; path=/; expires=${getExpirationDate()}`;
          document.cookie = `name=${response.firstName}; path=/; expires=${getExpirationDate()}`;
        })
        .catch(() => {
          hideLoading();
          showUserModalError();
        });
    }
    form.resetFields();
  };

  const onImageFileUpload = (evt: any) => {
    if (evt.target.files[0]) {
      updatePictureValue(evt.target.files[0]);
    }
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 16 }}
      labelAlign="left"
      className={`${themeContext.darkTheme
        ? 'user-modal-form user-modal-form_dark'
        : 'user-modal-form'}`}
      onFinish={onFormSubmit}
      size="small"
    >
      <img className="user-modal-form__img" src={pictureValue || DEFAULT_IMAGE} alt="Аватар" />
      <div className="user-modal-form__img-edit">
        <label className="user-modal-form__file-label" htmlFor="file-input">
          <span className="user-modal-form__file-span">Обновить фотографию</span>
        </label>
        <input
          name="file"
          className="user-modal-form__file-input"
          type="file"
          id="file-input"
          onChange={onImageFileUpload}
          ref={fileInputElement}
        />
        <button
          className="user-modal-form__file-delete"
          type="button"
          onClick={() => {
            if (fileInputElement.current) fileInputElement.current.value = '';
            resetImage('');
          }}
        >
          Удалить фотографию
        </button>
      </div>
      <Form.Item
        className="user-modal-form__item"
        name="name"
        label="Имя и фамилия:"
        rules={RULES.name}
      >
        <Input
          className="user-modal-form__input"
          value={nameValue}
          placeholder={`${firstName} ${lastName}`}
          onChange={(evt) => updateNameValue(evt.target.value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="gender"
        label="Пол:"
        rules={RULES.gender}
      >
        <Input
          className="user-modal-form__input"
          value={genderValue}
          placeholder={getGenderFieldValue(gender)}
          onChange={(evt) => updateGenderValue(evt.target.value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="birthDate"
        label="Дата рождения:"
        rules={RULES.birthDate}
      >
        <Input
          className="user-modal-form__input"
          value={dateOfBirthValue}
          placeholder={processDate(dateOfBirth)}
          onChange={(evt) => updateDateOfBirthValue(evt.target.value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="registrationDate"
        label="Дата регистрации:"
      >
        <Input
          className="user-modal-form__input"
          value={registrationDateValue}
          placeholder={processDate(registerDate)}
          disabled
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item user-modal-form__item_email"
        name="email"
        label="Email"
      >
        <Input
          className="user-modal-form__input"
          value={emailValue}
          placeholder={email}
          disabled
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="tel"
        label="Телефон:"
        rules={RULES.phone}
      >
        <Input
          className="user-modal-form__input"
          value={phoneValue}
          placeholder={phone}
          onChange={(evt) => updatePhoneValue(evt.target.value)}
        />
      </Form.Item>
      <Form.Item className="user-modal-form__submit">
        <Button
          className="user-modal-form__button"
          type="primary"
          htmlType="submit"
          style={btnStyle}
        >
          Сохранить
        </Button>
      </Form.Item>
      { error ? <div className="user-modal-form__error">Ошибка загрузки</div> : null }
    </Form>
  );
};
export default connect(
  (state: any) => ({
    user: state.userInfo.data.user,
    nameValue: state.userModal.values.name,
    genderValue: state.userModal.values.gender,
    dateOfBirthValue: state.userModal.values.dateOfBirth,
    registrationDateValue: state.userModal.values.registrationDate,
    emailValue: state.userModal.values.email,
    phoneValue: state.userModal.values.phone,
    pictureValue: state.userModal.values.picture,
    isOpened: state.userModal.isOpened,
    error: state.userModal.error
  }),
  (dispatch) => ({
    updateNameValue: bindActionCreators(updateUserModalNameAction, dispatch),
    updateGenderValue: bindActionCreators(updateUserModalGenderAction, dispatch),
    updateDateOfBirthValue: bindActionCreators(updateUserModalDateOfBirthAction, dispatch),
    updatePhoneValue: bindActionCreators(updateUserModalPhoneAction, dispatch),
    updatePictureValue: bindActionCreators(processUserModalPicture, dispatch),
    resetImage: bindActionCreators(updateUserModalPictureAction, dispatch),
    resetValues: bindActionCreators(resetValuesAction, dispatch),
    updateUserInfo: bindActionCreators(updateUserCardAction, dispatch),
    closeModal: bindActionCreators(closeUserModalAction, dispatch),
    updateAuthorizedUserData: bindActionCreators(updateAuthorizedUserDataAction, dispatch),
    showLoading: bindActionCreators(showLoadingAction, dispatch),
    hideLoading: bindActionCreators(hideLoadingAction, dispatch),
    showUserModalError: bindActionCreators(showUserModalErrorAction, dispatch),
    hideUserModalError: bindActionCreators(hideUserModalErrorAction, dispatch)
  })
)(UserModalForm);
