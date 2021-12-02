import React, { useContext, useEffect, useRef } from 'react';
import './UserModalForm.scss';
import {
  Button, Form, Input
} from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTranslation } from 'react-i18next';
import { IDummyUserFull } from '../../../../api/dummyApi/@types/dummyApi';
import { DEFAULT_IMAGE, IMAGE_CHANGE_CHECK_VALUE, RUSSIAN_LANGUAGE } from '../../../../constants/components';
import { getGenderFieldValue, isEmptyObject, processDate } from '../../../../utils/components';
import {
  closeUserModalAction, hideLoadingAction, hideUserModalErrorAction,
  processUserModalPicture, resetValuesAction, showLoadingAction, showUserModalErrorAction,
  updateUserModalDateOfBirthAction,
  updateUserModalGenderAction,
  updateUserModalNameAction,
  updateUserModalPhoneAction, updateUserModalPictureAction
} from '../../../../redux/actions/userModalForm';
import { BTN_DARK_STYLE, RULES, RULES_EN } from './antDesignSettings/userModalForm';
import { updateUser } from '../../../../api/dummyApi/dummyApi';
import { createUpdatedUserData } from '../../../../utils/api';
import { updateUserCardAction } from '../../../../redux/actions/userInfo';
import { getExpirationDate } from '../../../../utils/redux';
import { updateAuthorizedUserDataAction } from '../../../../redux/actions/login';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { IUserModalFormProps, IUserFormValues } from './@types/userModalForm';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import '../../../../locale/i18next';

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
  const language = useTypedSelector((state) => state.languageSelector.value);
  const { t } = useTranslation();
  const rules = language === RUSSIAN_LANGUAGE ? RULES : RULES_EN;

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
          <span className="user-modal-form__file-span">
            { t('photo.update', {}) }
          </span>
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
          { t('photo.delete', {}) }
        </button>
      </div>
      <Form.Item
        className="user-modal-form__item"
        name="name"
        label={t('registration.nameField.title', {})}
        rules={rules.name}
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
        label={t('registration.genderField.title', {})}
        rules={rules.gender}
      >
        <Input
          className="user-modal-form__input"
          value={genderValue}
          placeholder={getGenderFieldValue(gender, language)}
          onChange={(evt) => updateGenderValue(evt.target.value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="birthDate"
        label={t('registration.dateOfBirthField.title', {})}
        rules={rules.birthDate}
      >
        <Input
          className="user-modal-form__input"
          value={dateOfBirthValue}
          placeholder={processDate(dateOfBirth, language)}
          onChange={(evt) => updateDateOfBirthValue(evt.target.value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="registrationDate"
        label={t('registration.registrationDateField.title', {})}
      >
        <Input
          className="user-modal-form__input"
          value={registrationDateValue}
          placeholder={processDate(registerDate, language)}
          disabled
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item user-modal-form__item_email"
        name="email"
        label={t('registration.emailField.title', {})}
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
        label={t('registration.phoneField.title', {})}
        rules={rules.phone}
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
          { t('saveButton', {}) }
        </Button>
      </Form.Item>
      { error ? (
        <div className="user-modal-form__error">
          { t('errorText', {}) }
        </div>
      ) : null }
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
