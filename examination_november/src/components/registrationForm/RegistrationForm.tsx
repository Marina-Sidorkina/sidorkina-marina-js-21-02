import React from 'react';
import './RegistraionForm.scss';
import {
  Button, Form, Input, Radio
} from 'antd';

const RegistrationForm = () => (
  <div className="registration">
    <Form
      className="registration__form"
      onFinish={(values) => console.log(values)}
    >
      <h2 className="registration__title">Регистрация</h2>
      <Form.Item className="registration__form-item registration__form-item_add">
        <label className="registration__label">Имя и фамилия:</label>
        <Form.Item
          className="registration__form-item registration__form-item_name"
          name="registration__name"
          rules={[
            {
              validator(rule: any, value: string) {
                let check;
                if (value) {
                  const values = value.split(' ');
                  check = values[1] ? values[0].length >= 2 && values[1].length >= 2
                    && values[0].length <= 50 && values[1].length <= 50 : false;
                }
                if (!check) return Promise.reject(new Error('Минимум по 2, максимум по 50 зн.'));

                return Promise.resolve();
              }
            }
          ]}
        >
          <Input
            className="registration__input"
            value=""
            placeholder="Введите имя и фамилию"
            onChange={(value) => console.log(value)}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item className="registration__form-item registration__form-item_add">
        <label className="registration__label registration__label_gender">Пол:</label>
        <Form.Item
          className="registration__form-item registration__form-item_radio"
          name="registration__gender"
          rules={[
            { required: true, message: 'Укажите пол' }
          ]}
        >
          <Radio.Group className="registration__radio-group">
            <Radio value="мужской">Мужской</Radio>
            <Radio value="женский">Женский</Radio>
          </Radio.Group>
        </Form.Item>
      </Form.Item>
      <Form.Item className="registration__form-item registration__form-item_add">
        <label className="registration__label">Дата рождения:</label>
        <Form.Item
          className="registration__form-item"
          name="registration__date"
          rules={[
            { required: true, message: 'Укажите дату рождения' },
            {
              pattern: /^(0[1-9]|1[012])[.](0[1-9]|[12][0-9]|3[01])[.](19|20)\d\d$/,
              message: 'Формат: ММ.ДД.ГГГГ'
            },
            {
              validator(rule: any, value: any) {
                const today = new Date();
                const dateArray = value ? value.split('.').map((item: string) => parseInt(item, 10)) : null;
                const check = value ? new Date(dateArray[2], dateArray[0] - 1, dateArray[1]) : null;

                if (check && check > today) return Promise.reject(new Error('Invalid date'));

                return Promise.resolve();
              }
            }
          ]}
        >
          <Input
            className="registration__input"
            value=""
            placeholder="ММ.ДД.ГГГГ"
            onChange={(value) => console.log(value)}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item className="registration__form-item registration__form-item_add">
        <label className="registration__label">Email:</label>
        <Form.Item
          className="registration__form-item"
          name="registration__email"
          rules={[
            { required: true, message: ' Укажите email' },
            {
              pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
              message: 'Буквы и числа@буквы.буквы'
            }
          ]}
        >
          <Input
            className="registration__input"
            value=""
            placeholder="anonim@example.com"
            onChange={(value) => console.log(value)}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item className="registration__form-item registration__form-item_add">
        <label className="registration__label">Телефон:</label>
        <Form.Item
          className="registration__form-item"
          name="registration__tel"
          rules={[
            { required: true, message: 'Укажите телефон' },
            { min: 5, message: 'Минимум 5' },
            { max: 20, message: 'Максимум 20' }
          ]}
        >
          <Input
            className="registration__input"
            value=""
            placeholder="+79099099090"
            onChange={(value) => console.log(value)}
          />
        </Form.Item>
      </Form.Item>
      <Form.Item className="registration__submit">
        <Button
          className="registration__button"
          type="primary"
          htmlType="submit"
        >
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
    <a className="login__link" href="registration">Уже есть аккаунт? Войти</a>
  </div>
);

export default RegistrationForm;
