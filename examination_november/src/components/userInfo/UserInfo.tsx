import React from 'react';
import './UserInfo.scss';

const UserInfo = () => (
  <div className="user-info">
    <img
      className="user-info__image"
      src="https://i.ibb.co/0r1Jdjt/photo-2021-11-21-02-16-16.jpg"
      alt="Аватар пользователя"
    />
    <div className="user-info__details">
      <p className="user-info__name">ms. Анжелика Андерсен</p>
      <p className="user-info__item">
        <b>Пол: </b>
        женский
      </p>
      <p className="user-info__item">
        <b>Дата рождения: </b>
        20 апреля 1889 года
      </p>
      <p className="user-info__item">
        <b>Дата регистрации: </b>
        10 октября 2006 года
      </p>
      <p className="user-info__item">
        <b>Email: </b>
        email@gmail.com
      </p>
      <p className="user-info__item user-info__item_tel">
        <b>Телефон: </b>
        +79099099090
      </p>
      <p className="user-info__item">
        <b>ID: </b>
        364536273912645
      </p>
    </div>
    <div className="user-info__edit">
      <p>Редактировать</p>
    </div>
  </div>
);

export default UserInfo;
