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
      <Form.Item className="login__form-item login__form-item_add">
        <label className="login__label">ID:</label>
        <Form.Item
          className="login__form-item"
          name="login-input"
          rules={[
            { required: true, message: 'Please enter your ID' }
          ]}
        >
          <Input
            className="login__input"
            value=""
            placeholder="Введите свой ID"
            onChange={(value) => console.log(value)}
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
      </Form.Item>
    </Form>
    <a className="login__link" href="login">Ещё нет аккаунта? Зарегистрироваться</a>
  </div>
);

export default LoginForm;
