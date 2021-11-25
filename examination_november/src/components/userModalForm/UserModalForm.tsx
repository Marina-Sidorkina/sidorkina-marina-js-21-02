import React, { useEffect } from 'react';
import './UserModalForm.scss';
import {
  Button, Form, Input
} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IDummyUserFull } from '../../@types/dummyApi';
import { DEFAULT_IMAGE, imageChangeCheckValue } from '../../constants/components';
import { isEmptyObject, processDate } from '../../utils/components';
import {
  closeUserModalAction,
  processUserModalPicture, resetValuesAction,
  updateUserModalDateOfBirthAction,
  updateUserModalGenderAction,
  updateUserModalNameAction,
  updateUserModalPhoneAction, updateUserModalPictureAction,
  updateUserModalRegistrationDateAction
} from '../../redux/actions/userModalForm';
import { RULES } from '../../settings/userModalForm';
import { updateUser } from '../../api/dummyApi';
import { createUpdatedUserData } from '../../utils/api';
import { updateUserCardAction } from '../../redux/actions/userInfo';
import { getExpirationDate } from '../../utils/redux';

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
  updateRegistrationDateValue: Function;
  updatePhoneValue: Function;
  updatePictureValue: Function;
  pictureValue: string;
  resetImage: Function;
  resetValues: Function;
  isOpened: boolean;
  updateUserInfo: Function;
  closeModal: Function;
}

interface IUserFormValues {
  name: string;
  gender: string;
  birthDate: string;
  registrationDate: string;
  email: string;
  tel: string;
}

export interface IUserModalFormParams {
  id: string;
}

const UserModalForm = (props: IUserModalFormProps) => {
  const {
    user, nameValue, genderValue, dateOfBirthValue, registrationDateValue,
    emailValue, phoneValue, updateNameValue, updateGenderValue, updateDateOfBirthValue,
    updateRegistrationDateValue, updatePhoneValue, updatePictureValue,
    pictureValue, resetImage, resetValues, isOpened, updateUserInfo, closeModal
  } = props;

  const {
    id, firstName, lastName, picture, gender, dateOfBirth, registerDate, email, phone
  } = user;

  const [form] = Form.useForm();

  useEffect(() => {
    resetValues();
    resetImage(picture);
    form.resetFields();
  }, [isOpened]);

  const onFormSubmit = (values: IUserFormValues) => {
    const data = {
      ...values,
      image: pictureValue === picture
        ? imageChangeCheckValue
        : pictureValue
    };
    const updatedData = createUpdatedUserData(data);
    if (!isEmptyObject(updatedData)) {
      updateUser(updatedData, id)
        .then((response: IDummyUserFull) => {
          updateUserInfo(response);
          closeModal();
          document.cookie = `picture=${response.picture || DEFAULT_IMAGE}; path=/; expires=${getExpirationDate()}`;
          document.cookie = `name=${response.firstName}; path=/; expires=${getExpirationDate()}`;
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
      className="user-modal-form"
      onFinish={onFormSubmit}
      size="small"
    >
      <img className="user-modal-form__img" src={pictureValue || DEFAULT_IMAGE} alt="Аватар" />
      <div className="user-modal-form__img-edit">
        <label className="user-modal-form__file-label" htmlFor="file-input">
          Обновить фотографию
        </label>
        <input
          name="file"
          className="user-modal-form__file-input"
          type="file"
          id="file-input"
          onChange={onImageFileUpload}
        />
        <button
          className="user-modal-form__file-delete"
          type="button"
          onClick={() => resetImage('')}
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
          placeholder={gender === 'female' ? 'Женский' : 'Мужской'}
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
        rules={RULES.registrationDate}
      >
        <Input
          className="user-modal-form__input"
          value={registrationDateValue}
          placeholder={processDate(registerDate)}
          onChange={(evt) => updateRegistrationDateValue(evt.target.value)}
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
        >
          Сохранить
        </Button>
      </Form.Item>
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
    isOpened: state.userModal.isOpened
  }),
  (dispatch) => ({
    updateNameValue: bindActionCreators(updateUserModalNameAction, dispatch),
    updateGenderValue: bindActionCreators(updateUserModalGenderAction, dispatch),
    updateDateOfBirthValue: bindActionCreators(updateUserModalDateOfBirthAction, dispatch),
    updateRegistrationDateValue: bindActionCreators(updateUserModalRegistrationDateAction, dispatch),
    updatePhoneValue: bindActionCreators(updateUserModalPhoneAction, dispatch),
    updatePictureValue: bindActionCreators(processUserModalPicture, dispatch),
    resetImage: bindActionCreators(updateUserModalPictureAction, dispatch),
    resetValues: bindActionCreators(resetValuesAction, dispatch),
    updateUserInfo: bindActionCreators(updateUserCardAction, dispatch),
    closeModal: bindActionCreators(closeUserModalAction, dispatch),
  })
)(UserModalForm);
