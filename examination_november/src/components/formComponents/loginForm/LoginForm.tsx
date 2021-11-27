import React, { useContext, useEffect } from 'react';
import './LoginForm.scss';
import {
  Form, Input, Button, Spin
} from 'antd';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  authorizeUser,
  hideLoadingAction,
  resetAuthorizationErrorAction,
  updateAuthorizationInputValue
} from '../../../redux/actions/login';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { RULES } from '../../../antDesignSettings/loginForm';
import { LOGIN_INPUT_FILED_NAME } from '../../../constants/components';
import { ILoginFormProps } from './@types/loginForm';

const LoginForm = (props: ILoginFormProps) => {
  const history = useHistory();

  const {
    isLoading, authorize, updateInputValue, inputValue,
    hideLoading, error, resetError
  } = props;

  const themeContext = useContext(ThemeContext);

  const onSubmit = (values: any) => {
    authorize(values[LOGIN_INPUT_FILED_NAME], history);
  };

  const onChange = (evt: any) => {
    updateInputValue(evt.target.value);
  };

  useEffect(() => {
    resetError();
    return () => hideLoading();
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
        <h2 className="login__title">Вход</h2>
        <Form.Item className="login__form-item login__form-item_add">
          <label className="login__label">ID:</label>
          <Form.Item
            className="login__form-item"
            name="login-input"
            rules={RULES.id}
          >
            <Input
              className="login__input"
              value={inputValue}
              placeholder="Введите свой ID"
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
            Войти
          </Button>
          {isLoading
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
          {error ? <div className="login__error">ID не существует</div> : null}
        </Form.Item>
      </Form>
      <Link to="registration">
        <span className="login__link">Ещё нет аккаунта? Зарегистрироваться</span>
      </Link>
    </div>
  );
};

export default connect(
  (state: any) => ({
    isLoading: state.login.data.isLoading,
    inputValue: state.login.data.inputValue,
    error: state.login.data.error,
  }),
  (dispatch) => ({
    authorize: bindActionCreators(authorizeUser, dispatch),
    updateInputValue: bindActionCreators(updateAuthorizationInputValue, dispatch),
    hideLoading: bindActionCreators(hideLoadingAction, dispatch),
    resetError: bindActionCreators(resetAuthorizationErrorAction, dispatch)
  })
)(LoginForm);
