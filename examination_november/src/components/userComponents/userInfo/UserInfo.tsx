import React, { useContext, useEffect } from 'react';
import './UserInfo.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { loadUserInfo } from '../../../redux/actions/userInfo';
import { getGenderFieldValue, processDate } from '../../../utils/components';
import { IDummyUserFull } from '../../../api/dummyApi/@types/dummyApi';
import { DEFAULT_IMAGE } from '../../../constants/components';
import { openUserModalAction, updateUserModalPictureAction } from '../../../redux/actions/userModalForm';
import { ThemeContext } from '../../../contexts/ThemeContext';

export interface IUserInfoParams {
  id: string;
}

interface IUserInfoProps {
  isLoading: boolean;
  user: IDummyUserFull;
  loadUser: Function;
  authorizedUserId: string;
  openModal: Function;
  resetFormImage: Function;
  error: boolean;
}

const UserInfo = (props: IUserInfoProps) => {
  const params = useParams() as IUserInfoParams;

  const {
    isLoading, user, loadUser, authorizedUserId, openModal, resetFormImage, error
  } = props;

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    loadUser(params.id);
  }, [params.id]);

  useEffect(() => {
    resetFormImage(user.picture);
  }, [user.picture]);

  const element = isLoading
    ? (
      <Spin
        className="users-info__spinner"
        tip="Идёт загрузка..."
        size="small"
        style={{
          width: '110px',
          height: '110px',
          position: 'absolute',
          top: 'calc(50% - 55px)',
          left: 'calc(50% - 55px)'
        }}
      />
    ) : (
      <>
        <img
          className="user-info__image"
          src={user.picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <div className="user-info__container">
          <div className="user-info__details">
            <p className="user-info__name">{`${user.title || ''} ${user.firstName} ${user.lastName}`}</p>
            <p className="user-info__item">
              <b>Пол: </b>
              {getGenderFieldValue(user.gender)}
            </p>
            <p className="user-info__item">
              <b>Дата рождения: </b>
              {processDate(user.dateOfBirth)}
            </p>
            <p className="user-info__item">
              <b>Дата регистрации: </b>
              {processDate(user.registerDate)}
            </p>
            <p className="user-info__item">
              <b>Email: </b>
              {user.email}
            </p>
            <p className="user-info__item user-info__item_tel">
              <b>Телефон: </b>
              {user.phone}
            </p>
            <p className="user-info__item user-info__item_id">
              <b>ID: </b>
              {user.id}
            </p>
          </div>
          {authorizedUserId === params.id
            ? (
              <button type="button" className="user-info__edit">
                <svg
                  className="user-info__edit-svg"
                  viewBox="0 0 91 91"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path d="M36.682,45.397l-0.002,0.001c-0.002,0.002-0.002,
            0.004-0.002,0.004c-0.137,0.139-0.24,0.307-0.324,0.486
            c-0.023,0.045-0.039,0.086-0.057,0.133c-0.018,0.046-0.043,
            0.088-0.057,0.137l-4.008,14.826c-0.158,0.588,0.01,1.215,0.439,1.646
            c0.324,0.323,0.758,0.498,1.201,0.498c0.148,0,0.299-0.019,
            0.443-0.06l14.256-3.853c0.094,0.016,0.184,0.055,0.279,0.055
            c0.436,0,0.871-0.166,1.203-0.498l23.086-23.088c1.23-1.231,
            1.91-2.868,1.91-4.609c0-1.741-0.68-3.378-1.91-4.609l-4.154-4.154
            c-2.461-2.463-6.76-2.459-9.217,0L36.682,45.397L36.682,
            45.397z M62.174,24.715c1.174-1.177,3.23-1.176,4.408,0.001l4.154,4.153
            c0.59,0.589,0.914,1.372,0.914,2.206s-0.324,1.616-0.914,2.206l-1.25,
            1.25l-8.564-8.563L62.174,24.715z M58.518,28.372l8.564,8.563
            l-18.23,18.231l-8.566-8.564L58.518,28.372z M39.285,50.407l6.137,
            6.138l-9.135,2.471l2.469-9.136L39.285,50.407z"
                    />
                    <rect
                      height="15.087"
                      transform="matrix(0.7072 0.707 -0.707 0.7072 45.0547 -26.2009)"
                      width="3.4"
                      x="52.459"
                      y="33.749"
                    />
                    <path d="M20.961,74.166h45.74c3.596,0,6.518-2.925,
            6.518-6.52V44.628H69.82v23.019c0,1.721-1.398,3.119-3.119
            ,3.119H22.662V25.662 h29.012v-3.4H20.961c-0.939,0-1.699,
            0.761-1.699,1.7v48.503C19.262,73.404,20.021,74.166,20.961,74.166z"
                    />
                  </g>
                </svg>
                <span className="user-info__edit-text" onClick={() => openModal()}>Редактировать</span>
              </button>
            )
            : null}
        </div>
      </>
    );

  return (
    <div className={`${themeContext.darkTheme
      ? 'user-info user-info_dark'
      : 'user-info'}`}
    >
      { error ? <div className="posts-list__error">Ошибка загрузки...</div> : element }
    </div>
  );
};

export default connect(
  (state: any) => ({
    isLoading: state.userInfo.data.isLoading,
    user: state.userInfo.data.user,
    error: state.userInfo.data.error,
    authorizedUserId: state.login.data.authorizedUserId
  }),
  (dispatch) => ({
    loadUser: bindActionCreators(loadUserInfo, dispatch),
    openModal: bindActionCreators(openUserModalAction, dispatch),
    resetFormImage: bindActionCreators(updateUserModalPictureAction, dispatch)
  })
)(UserInfo);
