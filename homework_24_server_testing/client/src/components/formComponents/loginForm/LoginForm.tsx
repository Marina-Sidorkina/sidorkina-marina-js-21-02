import React, { useContext, useEffect } from 'react';
import '../../../locale/i18next';
import {
  Form, Input, Button, Spin
} from 'antd';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  authorizeUser, hideLoadingAction,
  resetAuthorizationErrorAction, updateAuthorizationInputValue
} from '../../../redux/actions/login';
import styles from './LoginForm.module.scss';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { RULES, RULES_EN } from './antDesignSettings/loginForm';
import { LOGIN_INPUT_FILED_NAME, RUSSIAN_LANGUAGE } from '../../../constants/components';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const LoginForm = () => {
  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const language = useTypedSelector((state) => state.languageSelector.value);
  const rules = language === RUSSIAN_LANGUAGE ? RULES : RULES_EN;

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
    <div className={themeContext.darkTheme ? `${styles.login} ${styles.login_dark}` : styles.login}>
      <Form
        className={styles.form}
        onFinish={onSubmit}
      >
        <h2 className={styles.title}>
          { t('login.title', {}) }
        </h2>
        <Form.Item className={`${styles.formItem} ${styles.formItem_add}`}>
          <label className={styles.label}>ID:</label>
          <Form.Item
            className={styles.formItem}
            name="login-input"
            rules={rules.id}
          >
            <Input
              className={styles.input}
              value={stateValues.login.data.inputValue}
              placeholder={t('login.placeholder', {})}
              onChange={onChange}
            />
          </Form.Item>
        </Form.Item>

        <Form.Item className={styles.submit}>
          <Button
            className={styles.button}
            type="primary"
            htmlType="submit"
          >
            { t('login.button', {}) }
          </Button>
          {stateValues.login.data.isLoading
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
          {stateValues.login.data.error
            ? (
              <div className={styles.error}>
                { t('login.error', {}) }
              </div>
            )
            : null}
        </Form.Item>
      </Form>
      <Link to="registration">
        <span className={styles.link}>
          { t('login.link', {}) }
        </span>
      </Link>
    </div>
  );
};

export default LoginForm;
