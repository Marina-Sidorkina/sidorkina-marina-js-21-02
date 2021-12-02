import React, { useContext, useEffect } from 'react';
import './UserInfo.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { loadUserInfo } from '../../../redux/actions/userInfo';
import { getGenderFieldValue, getTitleValue, processDate } from '../../../utils/components';
import { DEFAULT_IMAGE } from '../../../constants/components';
import { openUserModalAction, updateUserModalPictureAction } from '../../../redux/actions/userModalForm';
import { ThemeContext } from '../../../contexts/ThemeContext';
import UserInfoEditIcon from '../userInfoEditIcon/UserInfoEditIcon';
import { IUserInfoProps, IUserInfoParams } from './@types/userInfo';
import '../../../locale/i18next';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const UserInfo = (props: IUserInfoProps) => {
  const params = useParams() as IUserInfoParams;

  const {
    isLoading, user, loadUser, authorizedUserId, openModal, resetFormImage, error
  } = props;

  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const language = useTypedSelector((state) => state.languageSelector.value);

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
          src={user.picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <div className="user-info__container">
          <div className="user-info__details">
            <p className="user-info__name">
              {`${user.title ? `${getTitleValue(user.title, language)}` : ''} ${user.firstName} ${user.lastName}`}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.gender', {}) }
                {' '}
              </b>
              {getGenderFieldValue(user.gender, language)}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.dateOfBirth', {}) }
                {' '}
              </b>
              {processDate(user.dateOfBirth, language)}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.registrationDate', {}) }
                {' '}
              </b>
              {processDate(user.registerDate, language)}
            </p>
            <p className="user-info__item">
              <b>
                { t('userInfo.email', {}) }
                {' '}
              </b>
              {user.email}
            </p>
            <p className="user-info__item user-info__item_tel">
              <b>
                { t('userInfo.phone', {}) }
                {' '}
              </b>
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
                <UserInfoEditIcon />
                <span className="user-info__edit-text" onClick={() => openModal()}>
                  { t('editButton', {}) }
                </span>
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
      { error ? (
        <div className="posts-list__error">
          { t('errorText', {}) }
        </div>
      ) : element }
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
