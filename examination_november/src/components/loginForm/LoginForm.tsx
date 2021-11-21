import React from 'react';
import './LoginForm.scss';
import { Form, Input, Button } from 'antd';

const LoginForm = () => (
  <div className="login">
    <Form
      className="login__form"
      onFinish={(values) => console.log(values)}
    >
      <h2 className="login__title">Вход</h2>
      <Form.Item
        className="login__form-item"
        name="login-input"
        rules={[
          { required: true, message: 'Please enter your ID' }
        ]}
      >
        <label className="login__label">ID:</label>
        <Input
          className="login__input"
          value=""
          placeholder="Введите свой ID"
          onChange={(value) => console.log(value)}
        />
      </Form.Item>
      <Form.Item className="login__submit">
        <Button
          className="login__button"
          type="primary"
          htmlType="submit"
        >
          Войти
        </Button>
      </Form.Item>
    </Form>
    <a className="login__link" href="registration">Ещё нет аккаунта? Зарегистрироваться</a>
  </div>
);

export default LoginForm;
