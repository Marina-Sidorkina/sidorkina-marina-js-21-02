import React from 'react';
import { Link } from 'react-router-dom';
import '../../../locale/i18next';
import { useTranslation } from 'react-i18next';
import styles from './NotAuthorizedUserBlock.module.scss';

const NotAuthorizedUserBlock = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.userBlock}>
      <div className={styles.item}>
        <Link className={styles.link} to="/login">
          <span className={styles.signIn}>
            { t('authorization.signIn', {}) }
          </span>
        </Link>
      </div>
      <div className={styles.item}>
        <Link className={styles.link} to="/registration">
          <span className={styles.register}>
            { t('authorization.signUp', {}) }
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorizedUserBlock;
