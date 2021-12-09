import React from 'react';
import './Authorization.scss';
import NotAuthorizedUserBlock from '../notAuthorizedUserBlock/NotAuthorizedUserBlock';
import AuthorizedUserBlock from '../authorizedUserBlock/AuthorizedUserBlock';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const Authorization = () => {
  const authorizedUserId = useTypedSelector((state) => state.login.data.authorizedUserId);

  return (
    <div className="authorization">
      <div className="authorization__dropdown">
        <input className="authorization__toggle" id="authorization__toggle" type="checkbox" />
        <label className="authorization__btn" htmlFor="authorization__toggle">
          <span className="authorization__control" />
        </label>
        <div className="authorization__menu">
          { authorizedUserId ? <AuthorizedUserBlock /> : <NotAuthorizedUserBlock />}
        </div>
      </div>
    </div>
  );
};

export default Authorization;
