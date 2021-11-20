import React from 'react';
import './Authorization.scss';
import AuthorizedUserBlock from '../authorizesUseBlock/AuthorizedUserBlock';

const Authorization = () => (
  <div className="authorization">
    <div className="authorization__dropdown">
      <input className="authorization__toggle" id="authorization__toggle" type="checkbox" />
      <label className="authorization__btn" htmlFor="authorization__toggle">
        <span className="authorization__control" />
      </label>
      <div className="authorization__menu">
        <AuthorizedUserBlock />
      </div>
    </div>
  </div>
);

export default Authorization;
