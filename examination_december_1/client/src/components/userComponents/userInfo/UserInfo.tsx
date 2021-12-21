import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './UserInfo.module.scss';
import { loadUserInfo } from '../../../redux/actions/userInfo';
import { getGenderFieldValue, getTitleValue } from '../../../utils/components';
import { DEFAULT_IMAGE, RUSSIAN_LANGUAGE } from '../../../constants/components';
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
  const language = useTypedSelector((state) => state.languageSelector.value);
  const getDateValue = (value: { ruDate: string, enDate: string }) => (
    language === RUSSIAN_LANGUAGE
      ? value.ruDate
      : value.enDate
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
          className={styles.image}
          src={stateValues.userInfo.data.user.picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <div className={styles.container}>
          <div className={styles.details}>
            <p className={styles.name}>
              {`${stateValues.userInfo.data.user.title
                ? `${getTitleValue(stateValues.userInfo.data.user.title, language)}`
                : ''} ${stateValues.userInfo.data.user.firstName} ${stateValues.userInfo.data.user.lastName}`}
            </p>
            <p className={styles.item}>
              <b>
                { t('userInfo.gender', {}) }
                {' '}
              </b>
              {getGenderFieldValue(stateValues.userInfo.data.user.gender, language)}
            </p>
            <p className={styles.item}>
              <b>
                { t('userInfo.dateOfBirth', {}) }
                {' '}
              </b>
              { stateValues.userInfo.data.user.dateOfBirth
                ? getDateValue(stateValues.userInfo.data.user.dateOfBirth)
                : '' }
            </p>
            <p className={styles.item}>
              <b>
                { t('userInfo.registrationDate', {}) }
                {' '}
              </b>
              {stateValues.userInfo.data.user.registerDate
                ? getDateValue(stateValues.userInfo.data.user.registerDate)
                : '' }
            </p>
            <p className={styles.item}>
              <b>
                { t('userInfo.email', {}) }
                {' '}
              </b>
              {stateValues.userInfo.data.user.email}
            </p>
            <p className={styles.item}>
              <b>
                { t('userInfo.phone', {}) }
                {' '}
              </b>
              {stateValues.userInfo.data.user.phone}
            </p>
            <p className={styles.itemId}>
              <b>ID: </b>
              {stateValues.userInfo.data.user.id}
            </p>
          </div>
          { stateValues.login.data.authorizedUserId === params.id
            ? (
              <button type="button" className={styles.edit}>
                <UserInfoEditIcon />
                <span
                  className={styles.editText}
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
    <div className={themeContext.darkTheme
      ? `${styles.info} ${styles.info_dark}`
      : styles.info}
    >
      { stateValues.userInfo.data.error ? (
        <div>
          { t('errorText', {}) }
        </div>
      ) : element }
    </div>
  );
};

export default UserInfo;
