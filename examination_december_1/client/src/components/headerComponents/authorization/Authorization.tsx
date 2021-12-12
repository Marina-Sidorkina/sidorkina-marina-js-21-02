import React from 'react';
import styles from './Authorization.module.scss';
import NotAuthorizedUserBlock from '../notAuthorizedUserBlock/NotAuthorizedUserBlock';
import AuthorizedUserBlock from '../authorizedUserBlock/AuthorizedUserBlock';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const Authorization = () => {
  const authorizedUserId = useTypedSelector((state) => state.login.data.authorizedUserId);

  return (
    <div className={styles.authorization}>
      <div className={styles.dropdown}>
        <input className={styles.toggle} id="authorization__toggle" type="checkbox" />
        <label className={styles.btn} htmlFor="authorization__toggle">
          <span className={styles.control} />
        </label>
        <div className={styles.menu}>
          { authorizedUserId ? <AuthorizedUserBlock /> : <NotAuthorizedUserBlock />}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
