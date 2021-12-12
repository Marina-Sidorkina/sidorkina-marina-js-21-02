import React, { useContext, useEffect } from 'react';
import {
  Button, Form, Input, Radio, Spin
} from 'antd';
import { Link } from 'react-router-dom';
import '../../../locale/i18next';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addAndShowNewUser } from '../../../api/proxy';
import { createNewUser } from '../../../utils/api';
import { authorizeUser } from '../../../redux/actions/login';
import {
  hideLoadingAction,
  hideRegistrationErrorAction,
  resetValuesAction, showLoadingAction, showRegistrationErrorAction,
  updateDateOfBirthAction,
  updateEmailAction,
  updateGenderAction,
  updateNameAction, updatePhoneAction
} from '../../../redux/actions/registrationForm';
import styles from './RegistraionForm.module.scss';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { RULES, RULES_EN } from './antDesignSettings/registrationForm';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { RUSSIAN_LANGUAGE } from '../../../constants/components';

const RegistrationForm = () => {
  const language = useTypedSelector((state) => state.languageSelector.value);
  const rules = language === RUSSIAN_LANGUAGE ? RULES : RULES_EN;
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(hideRegistrationErrorAction());
  }, []);

  const onFinish = (data: any) => {
    dispatch(showLoadingAction());
    addAndShowNewUser(createNewUser(data))
      .then((response) => {
        if (response.data.data.id) {
          dispatch(resetValuesAction());
          dispatch(hideRegistrationErrorAction());
          dispatch(hideLoadingAction());
          dispatch(authorizeUser(response.data.data.id, history));
        } else {
          dispatch(showRegistrationErrorAction());
          dispatch(hideLoadingAction());
        }
      })
      .catch(() => {
        dispatch(showRegistrationErrorAction());
        dispatch(hideLoadingAction());
      });
  };

  return (
    <div className={themeContext.darkTheme
      ? `${styles.registration} ${styles.registration_dark}`
      : styles.registration}
    >
      <Form
        className={styles.form}
        onFinish={onFinish}
      >
        <h2 className={styles.title}>
          { t('registration.title') }
        </h2>
        <Form.Item className={`${styles.formItem} ${styles.formItem_add}`}>
          <label className={styles.label}>
            { t('registration.nameField.title') }
          </label>
          <Form.Item
            className={`${styles.formItem} ${styles.formItem_name}`}
            name="registration__name"
            rules={rules.name}
          >
            <Input
              className={styles.input}
              value={stateValues.registration.values.name}
              placeholder={t('registration.nameField.placeholder')}
              onChange={(evt) => {
                dispatch(updateNameAction(evt.target.value));
              }}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className={`${styles.formItem} ${styles.formItem_add}`}>
          <label className={`${styles.label} ${styles.label_gender}`}>
            { t('registration.genderField.title') }
          </label>
          <Form.Item
            className={`${styles.formItem} ${styles.formItem_radio}`}
            name="registration__gender"
            rules={rules.gender}
          >
            <Radio.Group
              value={stateValues.registration.values.gender}
              onChange={(evt) => {
                dispatch(updateGenderAction(evt.target.value));
              }}
              className={styles.radioGroup}
            >
              <Radio value="мужской" className={styles.label}>
                { t('registration.genderField.male') }
              </Radio>
              <Radio value="женский" className={styles.label}>
                { t('registration.genderField.female') }
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form.Item>
        <Form.Item className={`${styles.formItem} ${styles.formItem_add}`}>
          <label className={styles.label}>
            { t('registration.dateOfBirthField.title') }
          </label>
          <Form.Item
            className={styles.formItem}
            name="registration__date"
            rules={rules.date}
          >
            <Input
              className={styles.input}
              value={stateValues.registration.values.dateOfBirth}
              placeholder={t('registration.dateOfBirthField.placeholder')}
              onChange={(evt) => {
                dispatch(updateDateOfBirthAction(evt.target.value));
              }}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className={`${styles.formItem} ${styles.formItem_add}`}>
          <label className={styles.label}>
            { t('registration.emailField.title') }
          </label>
          <Form.Item
            className={styles.formItem}
            name="registration__email"
            rules={rules.email}
          >
            <Input
              className={styles.input}
              value={stateValues.registration.values.email}
              placeholder={t('registration.emailField.placeholder')}
              onChange={(evt) => {
                dispatch(updateEmailAction(evt.target.value));
              }}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className={`${styles.formItem} ${styles.formItem_add}`}>
          <label className={styles.label}>
            { t('registration.phoneField.title') }
          </label>
          <Form.Item
            className={styles.formItem}
            name="registration__tel"
            rules={rules.tel}
          >
            <Input
              className={styles.input}
              value={stateValues.registration.values.phone}
              placeholder={t('registration.phoneField.placeholder')}
              onChange={(evt) => {
                dispatch(updatePhoneAction(evt.target.value));
              }}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className={styles.submit}>
          {stateValues.registration.isLoading
            ? (
              <Spin
                size="small"
                style={{
                  width: '110px',
                  height: '110px',
                  position: 'absolute',
                  top: '-21px',
                  left: 'calc(50% - 55px)'
                }}
              />
            ) : null}
          <Button
            className={styles.button}
            type="primary"
            htmlType="submit"
          >
            { t('registration.button') }
          </Button>
          { stateValues.registration.error
            ? <div className={styles.error}>email уже зарегистрирован</div>
            : null }
        </Form.Item>
      </Form>
      <Link to="/login">
        <span className={styles.link}>
          { t('registration.link') }
        </span>
      </Link>
    </div>
  );
};

export default RegistrationForm;
