import React from 'react';
import './UserModalForm.scss';
import {
  Button, Form, Input
} from 'antd';

const UserModalForm = () => {
  const src = 'https://i.ibb.co/0r1Jdjt/photo-2021-11-21-02-16-16.jpg';
  const name = 'Анжелика Андерсен';
  const gender = 'Женский';
  const birthDate = '20 апреля 1989 года';
  const registrationDate = '10 октября 2006 года';
  const email = 'example@mail.ru';
  const tel = '+79099099090';

  return (
    <Form
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 16 }}
      labelAlign="left"
      className="user-modal-form"
      onFinish={(values) => console.log(values)}
      size="small"
    >
      <img className="user-modal-form__img" src={src} alt="Аватар" />
      <div className="user-modal-form__img-edit">
        <label className="user-modal-form__file-label" htmlFor="file-input">
          Обновить фотографию
        </label>
        <input
          name="file"
          className="user-modal-form__file-input"
          type="file"
          id="file-input"
        />
        <button className="user-modal-form__file-delete" type="button">Удалить фотографию</button>
      </div>
      <Form.Item
        className="user-modal-form__item"
        name="name"
        label="Имя и фамилия:"
        required
        rules={[
          {
            validator(rule: any, value: string) {
              let check;
              if (value) {
                const values = value.split(' ');
                check = values[1] ? values[0].length >= 2 && values[1].length >= 2
                  && values[0].length <= 50 && values[1].length <= 50 : false;
              }
              if (!check) return Promise.reject(new Error('Мин. по 2, макс. по 50 зн.'));

              return Promise.resolve();
            }
          }
        ]}
      >
        <Input
          className="user-modal-form__input"
          value=""
          placeholder={name}
          onChange={(value) => console.log(value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="gender"
        label="Пол:"
        required
        rules={[
          {
            validator(rule: any, value: string) {
              let check;
              if (value) {
                check = value === 'Женский' || value === 'Мужской';
              }
              if (!check) return Promise.reject(new Error('Мужской/Женский'));

              return Promise.resolve();
            }
          }
        ]}
      >
        <Input
          className="user-modal-form__input"
          value=""
          placeholder={gender}
          onChange={(value) => console.log(value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="birthDate"
        label="Дата рождения:"
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
          className="user-modal-form__input"
          value=""
          placeholder={birthDate}
          onChange={(value) => console.log(value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="registrationDate"
        label="Дата регистрации:"
        rules={[
          { required: true, message: 'Укажите дату регистрации' },
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
          className="user-modal-form__input"
          value=""
          placeholder={registrationDate}
          onChange={(value) => console.log(value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Укажите email' },
          {
            pattern: /^[a-z0-9]+[a-z-_0-9]+[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
            message: 'Буквы и числа@буквы.буквы'
          }
        ]}
      >
        <Input
          className="user-modal-form__input"
          value=""
          placeholder={email}
          onChange={(value) => console.log(value)}
        />
      </Form.Item>
      <Form.Item
        className="user-modal-form__item"
        name="tel"
        label="Телефон:"
        rules={[
          { required: true, message: 'Укажите телефон' },
          { min: 5, message: 'Минимум 5' },
          { max: 20, message: 'Максимум 20' }
        ]}
      >
        <Input
          className="user-modal-form__input"
          value=""
          placeholder={tel}
          onChange={(value) => console.log(value)}
        />
      </Form.Item>
      <Form.Item className="user-modal-form__submit">
        <Button
          className="user-modal-form__button"
          type="primary"
          htmlType="submit"
        >
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserModalForm;
