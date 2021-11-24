import React from 'react';
import './RegistraionForm.scss';
import {
  Button, Form, Input, Radio, Spin
} from 'antd';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAndShowNewUser } from '../../api/dummyApi';
import { createNewUser } from '../../utils/api';
import { authorizeUser } from '../../redux/actions/login';
import {
  hideLoadingAction,
  hideRegistrationErrorAction,
  resetValuesAction, showLoadingAction, showRegistrationErrorAction,
  updateDateOfBirthAction,
  updateEmailAction,
  updateGenderAction,
  updateNameAction, updatePhoneAction
} from '../../redux/actions/registrationForm';

interface IRegistrationFormProps {
  authorize: Function;
  resetValues: Function;
  updateDateOfBirth: Function;
  updateEmail: Function;
  updateGender: Function;
  updateName: Function;
  updatePhone: Function;
  name: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  phone: string;
  hideRegistrationError: Function;
  showRegistrationError: Function;
  error: string;
  isLoading: boolean;
  hideLoading: Function;
  showLoading: Function;
}

const RegistrationForm = (props: IRegistrationFormProps) => {
  const history = useHistory();
  const {
    authorize, updateDateOfBirth, updateEmail,
    updateGender, updatePhone, updateName, resetValues,
    name, email, dateOfBirth, phone, gender,
    showRegistrationError, hideRegistrationError, error, isLoading,
    hideLoading, showLoading
  } = props;

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
    <div className="registration">
      <Form
        className="registration__form"
        onFinish={onFinish}
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
              value={name}
              placeholder="Введите имя и фамилию"
              onChange={(evt) => updateName(evt.target.value)}
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
            <Radio.Group
              value={gender}
              onChange={(evt) => updateGender(evt.target.value)}
              className="registration__radio-group"
            >
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
              value={dateOfBirth}
              placeholder="ММ.ДД.ГГГГ"
              onChange={(evt) => updateDateOfBirth(evt.target.value)}
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
              value={email}
              placeholder="anonim@example.com"
              onChange={(evt) => updateEmail(evt.target.value)}
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
              value={phone}
              placeholder="+79099099090"
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
            Зарегистрироваться
          </Button>
          { error ? <div className="registration__error">email уже зарегистрирован</div> : null}
        </Form.Item>
      </Form>
      <Link to="/login">
        <span className="login__link">Уже есть аккаунт? Войти</span>
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
