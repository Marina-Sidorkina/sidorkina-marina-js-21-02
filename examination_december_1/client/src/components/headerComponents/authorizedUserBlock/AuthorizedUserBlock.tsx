import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './AuthorizedUserBlock.module.scss';
import { resetAuthorizedUserAction } from '../../../redux/actions/login';
import { ThemeContext } from '../../../contexts/ThemeContext';
import '../../../locale/i18next';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const AuthorizedUserBlock = () => {
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  const onClickHandler = (evt: any) => {
    dispatch(resetAuthorizedUserAction());
    evt.preventDefault();
  };

  const themeContext = useContext(ThemeContext);

  return (
    <div className={styles.userBlock}>
      <div className={styles.item}>
        <img
          className={themeContext.darkTheme
            ? `${styles.userPhoto} ${styles.userPhoto_dark}`
            : styles.userPhoto}
          src={stateValues.login.data.authorizedUserPicture}
          alt="Фото пользователя"
        />
        <Link
          to={`/profile/${stateValues.login.data.authorizedUserId}`}
          className={styles.link}
        >
          <span className={styles.userName}>
            { stateValues.login.data.authorizedUserName }
          </span>
        </Link>
      </div>
      <div className={styles.item}>
        <span className={styles.logout} onClick={onClickHandler}>
          { t('authorization.logout', {}) }
        </span>
      </div>
    </div>
  );
};

export default AuthorizedUserBlock;
