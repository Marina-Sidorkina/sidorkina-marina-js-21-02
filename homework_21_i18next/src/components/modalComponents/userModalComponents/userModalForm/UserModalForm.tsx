import React, { useContext, useEffect, useRef } from 'react';
import './UserModalForm.scss';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DEFAULT_IMAGE, RUSSIAN_LANGUAGE } from '../../../../constants/components';
import { getGenderFieldValue, processDate } from '../../../../utils/components';
import {
  processUserModalFormAction, processUserModalPicture, resetValuesAction,
  updateUserModalDateOfBirthAction, updateUserModalGenderAction, updateUserModalNameAction,
  updateUserModalPhoneAction, updateUserModalPictureAction
} from '../../../../redux/actions/userModalForm';
import { BTN_DARK_STYLE, RULES, RULES_EN } from './antDesignSettings/userModalForm';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { IUserFormValues } from './@types/userModalForm';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import '../../../../locale/i18next';

const UserModalForm = () => {
  const [form] = Form.useForm();
  const fileInputElement = useRef() as any;
  const themeContext = useContext(ThemeContext);
  const btnStyle = themeContext.darkTheme ? BTN_DARK_STYLE : {};
  const language = useTypedSelector((state) => state.languageSelector.value);
  const { t } = useTranslation();
  const rules = language === RUSSIAN_LANGUAGE ? RULES : RULES_EN;
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetValuesAction());
    dispatch(updateUserModalPictureAction(stateValues.userInfo.data.user.picture));
    form.resetFields();
    if (fileInputElement.current) fileInputElement.current.value = '';
  }, [stateValues.userModal.isOpened]);

  const onFormSubmit = (values: IUserFormValues) => {
    dispatch(processUserModalFormAction(
      values,
      stateValues.userModal.values.picture,
      stateValues.userInfo.data.user.picture,
      stateValues.userInfo.data.user.id,
      form
    ));
  };

  const onImageFileUpload = (evt: any) => {
    if (evt.target.files[0]) {
      dispatch(processUserModalPicture(evt.target.files[0]));
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
      <img
        className="user-modal-form__img"
        src={stateValues.userModal.values.picture || DEFAULT_IMAGE}
        alt="Аватар"
      />
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
            dispatch(updateUserModalPictureAction(''));
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
          value={stateValues.userModal.values.name}
          placeholder={`${stateValues.userInfo.data.user.firstName} ${stateValues.userInfo.data.user.lastName}`}
          onChange={(evt) => {
            dispatch(updateUserModalNameAction(evt.target.value));
          }}
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
          value={stateValues.userModal.values.gender}
          placeholder={getGenderFieldValue(stateValues.userInfo.data.user.gender, language)}
          onChange={(evt) => {
            dispatch(updateUserModalGenderAction(evt.target.value));
          }}
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
          value={stateValues.userModal.values.dateOfBirth}
          placeholder={processDate(stateValues.userInfo.data.user.dateOfBirth, language)}
          onChange={(evt) => {
            dispatch(updateUserModalDateOfBirthAction(evt.target.value));
          }}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="registrationDate"
        label={t('registration.registrationDateField.title', {})}
      >
        <Input
          className="user-modal-form__input"
          value={stateValues.userModal.values.registrationDate}
          placeholder={processDate(stateValues.userInfo.data.user.registerDate, language)}
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
          value={stateValues.userModal.values.email}
          placeholder={stateValues.userInfo.data.user.email}
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
          value={stateValues.userModal.values.phone}
          placeholder={stateValues.userInfo.data.user.phone}
          onChange={(evt) => {
            dispatch(updateUserModalPhoneAction(evt.target.value));
          }}
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
      { stateValues.userModal.error ? (
        <div className="user-modal-form__error">
          { t('errorText', {}) }
        </div>
      ) : null }
    </Form>
  );
};

export default UserModalForm;
