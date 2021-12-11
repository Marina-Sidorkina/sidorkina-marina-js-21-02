import React, { useContext, useEffect } from 'react';
import './LoginForm.scss';
import {
  Form, Input, Button, Spin
} from 'antd';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../locale/i18next';
import { useTranslation } from 'react-i18next';
import {
  authorizeUser,
  hideLoadingAction,
  resetAuthorizationErrorAction,
  updateAuthorizationInputValue
} from '../../../redux/actions/login';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { RULES } from './antDesignSettings/loginForm';
import { LOGIN_INPUT_FILED_NAME } from '../../../constants/components';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const LoginForm = () => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = (values: any) => {
    dispatch(authorizeUser(values[LOGIN_INPUT_FILED_NAME], history));
  };

  const onChange = (evt: any) => {
    dispatch(updateAuthorizationInputValue(evt.target.value));
  };

  useEffect(() => {
    dispatch(resetAuthorizationErrorAction());
    return () => {
      dispatch(hideLoadingAction());
    };
  }, []);

  return (
    <div className={`${themeContext.darkTheme
      ? 'login login_dark'
      : 'login'}`}
    >
      <Form
        className="login__form"
        onFinish={onSubmit}
      >
        <h2 className="login__title">
          { t('login.title', {}) }
        </h2>
        <Form.Item className="login__form-item login__form-item_add">
          <label className="login__label">ID:</label>
          <Form.Item
            className="login__form-item"
            name="login-input"
            rules={RULES.id}
          >
            <Input
              className="login__input"
              value={stateValues.login.data.inputValue}
              placeholder={t('login.placeholder', {})}
              onChange={onChange}
            />
          </Form.Item>
        </Form.Item>

        <Form.Item className="login__submit">
          <Button
            className="login__button"
            type="primary"
            htmlType="submit"
          >
            { t('login.button', {}) }
          </Button>
          {stateValues.login.data.isLoading
            ? (
              <Spin
                className="login__spinner"
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
          {stateValues.login.data.error
            ? (
              <div className="login__error">
                { t('login.error', {}) }
              </div>
            )
            : null}
        </Form.Item>
      </Form>
      <Link to="registration">
        <span className="login__link">
          { t('login.link', {}) }
        </span>
      </Link>
    </div>
  );
};

export default LoginForm;
