import React, { useContext, useEffect } from 'react';
import './RegistraionForm.scss';
import {
  Button, Form, Input, Radio, Spin
} from 'antd';
import { Link } from 'react-router-dom';
import '../../../locale/i18next';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTranslation } from 'react-i18next';
import { addAndShowNewUser } from '../../../api/dummyApi/dummyApi';
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
import { ThemeContext } from '../../../contexts/ThemeContext';
import { RULES, RULES_EN } from './antDesignSettings/registrationForm';
import { IRegistrationFormProps } from './@types/registrationForm';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { RUSSIAN_LANGUAGE } from '../../../constants/components';

const RegistrationForm = (props: IRegistrationFormProps) => {
  const {
    authorize, updateDateOfBirth, updateEmail,
    updateGender, updatePhone, updateName, resetValues,
    name, email, dateOfBirth, phone, gender,
    showRegistrationError, hideRegistrationError, error, isLoading,
    hideLoading, showLoading
  } = props;

  const language = useTypedSelector((state) => state.languageSelector.value);
  const rules = language === RUSSIAN_LANGUAGE ? RULES : RULES_EN;

  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();

  useEffect(() => () => hideRegistrationError(), []);

  const onFinish = (data: any) => {
    showLoading();
    addAndShowNewUser(createNewUser(data))
      .then((response) => {
        if (response.id) {
          resetValues();
          hideRegistrationError();
          hideLoading();
          authorize(response.id, history);
        } else {
          showRegistrationError();
          hideLoading();
        }
      });
  };

  return (
    <div className={`${themeContext.darkTheme
      ? 'registration registration_dark'
      : 'registration'}`}
    >
      <Form
        className="registration__form"
        onFinish={onFinish}
      >
        <h2 className="registration__title">
          { t('registration.title') }
        </h2>
        <Form.Item className="registration__form-item registration__form-item_add">
          <label className="registration__label">
            { t('registration.nameField.title') }
          </label>
          <Form.Item
            className="registration__form-item registration__form-item_name"
            name="registration__name"
            rules={rules.name}
          >
            <Input
              className="registration__input"
              value={name}
              placeholder={t('registration.nameField.placeholder')}
              onChange={(evt) => updateName(evt.target.value)}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className="registration__form-item registration__form-item_add">
          <label className="registration__label registration__label_gender">
            { t('registration.genderField.title') }
          </label>
          <Form.Item
            className="registration__form-item registration__form-item_radio"
            name="registration__gender"
            rules={rules.gender}
          >
            <Radio.Group
              value={gender}
              onChange={(evt) => updateGender(evt.target.value)}
              className="registration__radio-group"
            >
              <Radio value="мужской">
                { t('registration.genderField.male') }
              </Radio>
              <Radio value="женский">
                { t('registration.genderField.female') }
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Form.Item>
        <Form.Item className="registration__form-item registration__form-item_add">
          <label className="registration__label">
            { t('registration.dateOfBirthField.title') }
          </label>
          <Form.Item
            className="registration__form-item"
            name="registration__date"
            rules={rules.date}
          >
            <Input
              className="registration__input"
              value={dateOfBirth}
              placeholder={t('registration.dateOfBirthField.placeholder')}
              onChange={(evt) => updateDateOfBirth(evt.target.value)}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className="registration__form-item registration__form-item_add">
          <label className="registration__label">
            { t('registration.emailField.title') }
          </label>
          <Form.Item
            className="registration__form-item"
            name="registration__email"
            rules={rules.email}
          >
            <Input
              className="registration__input"
              value={email}
              placeholder={t('registration.emailField.placeholder')}
              onChange={(evt) => updateEmail(evt.target.value)}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className="registration__form-item registration__form-item_add">
          <label className="registration__label">
            { t('registration.phoneField.title') }
          </label>
          <Form.Item
            className="registration__form-item"
            name="registration__tel"
            rules={rules.tel}
          >
            <Input
              className="registration__input"
              value={phone}
              placeholder={t('registration.phoneField.placeholder')}
              onChange={(evt) => updatePhone(evt.target.value)}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item className="registration__submit">
          {isLoading
            ? (
              <Spin
                className="registration__spinner"
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
            className="registration__button"
            type="primary"
            htmlType="submit"
          >
            { t('registration.button') }
          </Button>
          { error ? <div className="registration__error">email уже зарегистрирован</div> : null}
        </Form.Item>
      </Form>
      <Link to="/login">
        <span className="login__link">
          { t('registration.link') }
        </span>
      </Link>
    </div>
  );
};

export default connect(
  (state: any) => ({
    name: state.registration.values.name,
    email: state.registration.values.email,
    gender: state.registration.values.gender,
    dateOfBirth: state.registration.values.dateOfBirth,
    phone: state.registration.values.phone,
    error: state.registration.error,
    isLoading: state.registration.isLoading
  }),
  (dispatch) => ({
    authorize: bindActionCreators(authorizeUser, dispatch),
    updateName: bindActionCreators(updateNameAction, dispatch),
    updateEmail: bindActionCreators(updateEmailAction, dispatch),
    updateGender: bindActionCreators(updateGenderAction, dispatch),
    updateDateOfBirth: bindActionCreators(updateDateOfBirthAction, dispatch),
    updatePhone: bindActionCreators(updatePhoneAction, dispatch),
    resetValues: bindActionCreators(resetValuesAction, dispatch),
    showRegistrationError: bindActionCreators(showRegistrationErrorAction, dispatch),
    hideRegistrationError: bindActionCreators(hideRegistrationErrorAction, dispatch),
    showLoading: bindActionCreators(showLoadingAction, dispatch),
    hideLoading: bindActionCreators(hideLoadingAction, dispatch),
  })
)(RegistrationForm);
