import React from 'react';
import './NotAuthorizedUserBlock.scss';
import { Link } from 'react-router-dom';
import '../../../locale/i18next';
import { useTranslation } from 'react-i18next';

const NotAuthorizedUserBlock = () => {
  const { t } = useTranslation();

  return (
    <div className="default-user-block">
      <div className="default-user-block__item">
        <Link className="default-user-block__link" to="/login">
          <span className="default-user-block__signIn">
            { t('authorization.signIn', {}) }
          </span>
        </Link>
      </div>
      <div className="default-user-block__item">
        <Link className="default-user-block__link" to="/registration">
          <span className="default-user-block__register">
            { t('authorization.signUp', {}) }
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorizedUserBlock;
