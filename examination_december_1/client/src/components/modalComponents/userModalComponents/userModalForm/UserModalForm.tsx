import React, { useContext, useEffect, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styles from './UserModalForm.module.scss';
import { DEFAULT_IMAGE, RUSSIAN_LANGUAGE } from '../../../../constants/components';
import { getGenderFieldValue } from '../../../../utils/components';
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

  const getDateValue = (value: { ruDate: string, enDate: string }) => (
    language === RUSSIAN_LANGUAGE
      ? value.ruDate
      : value.enDate
  );

  return (
    <Form
      form={form}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 16 }}
      labelAlign="left"
      className={themeContext.darkTheme
        ? `${styles.form} ${styles.form_dark}`
        : styles.form}
      onFinish={onFormSubmit}
      size="small"
    >
      <img
        className={styles.img}
        src={stateValues.userModal.values.picture || DEFAULT_IMAGE}
        alt="Аватар"
      />
      <div className={styles.imgEdit}>
        <label className={styles.fileLabel} htmlFor="file-input">
          <span className={styles.fileSpan}>
            { t('photo.update', {}) }
          </span>
        </label>
        <input
          name="file"
          className={styles.fileInput}
          type="file"
          id="file-input"
          onChange={onImageFileUpload}
          ref={fileInputElement}
        />
        <button
          className={styles.fileDelete}
          type="button"
          onClick={() => {
            if (fileInputElement.current) fileInputElement.current.value = '';
            dispatch(updateUserModalPictureAction(''));
          }}
        >
          <span className={styles.fileSpan}>
            { t('photo.delete', {}) }
          </span>
        </button>
      </div>
      <Form.Item
        className={styles.item}
        name="name"
        label={<label className={styles.label}>{t('registration.nameField.title')}</label>}
        rules={rules.name}
      >
        <Input
          className={styles.input}
          value={stateValues.userModal.values.name}
          placeholder={`${stateValues.userInfo.data.user.firstName} ${stateValues.userInfo.data.user.lastName}`}
          onChange={(evt) => {
            dispatch(updateUserModalNameAction(evt.target.value));
          }}
        />
      </Form.Item>
      <Form.Item
        className={styles.item}
        name="gender"
        label={<label className={styles.label}>{t('registration.genderField.title', {})}</label>}
        rules={rules.gender}
      >
        <Input
          className={styles.input}
          value={stateValues.userModal.values.gender}
          placeholder={getGenderFieldValue(stateValues.userInfo.data.user.gender, language)}
          onChange={(evt) => {
            dispatch(updateUserModalGenderAction(evt.target.value));
          }}
        />
      </Form.Item>
      <Form.Item
        className={styles.item}
        name="birthDate"
        label={<label className={styles.label}>{t('registration.dateOfBirthField.title', {})}</label>}
        rules={rules.birthDate}
      >
        <Input
          className={styles.input}
          value={stateValues.userModal.values.dateOfBirth}
          placeholder={stateValues.userInfo.data.user.dateOfBirth
            ? getDateValue(stateValues.userInfo.data.user.dateOfBirth)
            : ''}
          onChange={(evt) => {
            dispatch(updateUserModalDateOfBirthAction(evt.target.value));
          }}
        />
      </Form.Item>
      <Form.Item
        className={styles.item}
        name="registrationDate"
        label={<label className={styles.label}>{t('registration.registrationDateField.title', {})}</label>}
      >
        <Input
          className={styles.input}
          value={stateValues.userModal.values.registrationDate}
          placeholder={stateValues.userInfo.data.user.registerDate
            ? getDateValue(stateValues.userInfo.data.user.registerDate)
            : ''}
          disabled
        />
      </Form.Item>
      <Form.Item
        className={`${styles.item} ${styles.item_email}`}
        name="email"
        label={<label className={styles.label}>{t('registration.emailField.title', {})}</label>}
      >
        <Input
          className={styles.input}
          value={stateValues.userModal.values.email}
          placeholder={stateValues.userInfo.data.user.email}
          disabled
        />
      </Form.Item>
      <Form.Item
        className={styles.item}
        name="tel"
        label={<label className={styles.label}>{t('registration.phoneField.title', {})}</label>}
        rules={rules.phone}
      >
        <Input
          className={styles.input}
          value={stateValues.userModal.values.phone}
          placeholder={stateValues.userInfo.data.user.phone}
          onChange={(evt) => {
            dispatch(updateUserModalPhoneAction(evt.target.value));
          }}
        />
      </Form.Item>
      <Form.Item className={styles.submit}>
        <Button
          className={styles.button}
          type="primary"
          htmlType="submit"
          style={btnStyle}
        >
          { t('saveButton', {}) }
        </Button>
      </Form.Item>
      { stateValues.userModal.error ? (
        <div className={styles.error}>
          { t('errorText', {}) }
        </div>
      ) : null }
    </Form>
  );
};

export default UserModalForm;
