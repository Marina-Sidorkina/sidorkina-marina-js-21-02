import React, { useContext, useEffect } from 'react';
import './UserInfo.scss';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { loadUserInfo } from '../../../redux/actions/userInfo';
import { getGenderFieldValue, getTitleValue, processDate } from '../../../utils/components';
import { DEFAULT_IMAGE } from '../../../constants/components';
import { openUserModalAction, updateUserModalPictureAction } from '../../../redux/actions/userModalForm';
import { ThemeContext } from '../../../contexts/ThemeContext';
import UserInfoEditIcon from '../userInfoEditIcon/UserInfoEditIcon';
import { IUserInfoParams } from './@types/userInfo';
import '../../../locale/i18next';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const UserInfo = () => {
  const params = useParams() as IUserInfoParams;
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const language = useTypedSelector(
    (state) => state.languageSelector.value
  );

  useEffect(() => {
    dispatch(loadUserInfo(params.id));
  }, [params.id]);

  useEffect(() => {
    dispatch(updateUserModalPictureAction(stateValues.userInfo.data.user.picture));
  }, [stateValues.userInfo.data.user.picture]);

  const element = stateValues.userInfo.data.isLoading
    ? (
      <Spin
        className="users-info__spinner"
        tip={t('loadingText', {})}
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
          src={stateValues.userInfo.data.user.picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <div className="user-info__container">
          <div className="user-info__details">
            <p className="user-info__name">
              {`${stateValues.userInfo.data.user.title
                ? `${getTitleValue(stateValues.userInfo.data.user.title, language)}`
                : ''} ${stateValues.userInfo.data.user.firstName} ${stateValues.userInfo.data.user.lastName}`}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.gender', {}) }
                {' '}
              </b>
              {getGenderFieldValue(stateValues.userInfo.data.user.gender, language)}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.dateOfBirth', {}) }
                {' '}
              </b>
              {processDate(stateValues.userInfo.data.user.dateOfBirth, language)}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.registrationDate', {}) }
                {' '}
              </b>
              {processDate(stateValues.userInfo.data.user.registerDate, language)}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.email', {}) }
                {' '}
              </b>
              {stateValues.userInfo.data.user.email}
            </p>
            <p className="user-info__item user-info__item_tel">
              <b>
                { t('userInfo.phone', {}) }
                {' '}
              </b>
              {stateValues.userInfo.data.user.phone}
            </p>
            <p className="user-info__item user-info__item_id">
              <b>ID: </b>
              {stateValues.userInfo.data.user.id}
            </p>
          </div>
          { stateValues.login.data.authorizedUserId === params.id
            ? (
              <button type="button" className="user-info__edit">
                <UserInfoEditIcon />
                <span
                  className="user-info__edit-text"
                  onClick={() => dispatch(openUserModalAction())}
                >
                  { t('editButton', {}) }
                </span>
              </button>
            )
            : null }
        </div>
      </>
    );

  return (
    <div className={`${themeContext.darkTheme
      ? 'user-info user-info_dark'
      : 'user-info'}`}
    >
      { stateValues.userInfo.data.error ? (
        <div className="posts-list__error">
          { t('errorText', {}) }
        </div>
      ) : element }
    </div>
  );
};

export default UserInfo;
