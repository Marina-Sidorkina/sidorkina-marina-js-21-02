import React from 'react';
import './Authorization.scss';
import { connect } from 'react-redux';
import NotAuthorizedUserBlock from '../notAuthorizedUserBlock/NotAuthorizedUserBlock';
import AuthorizedUserBlock from '../authorizedUserBlock/AuthorizedUserBlock';

interface IAuthorizationProps {
  authorizedUserId: string;
}

const Authorization = (props: IAuthorizationProps) => {
  const { authorizedUserId } = props;
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

export default connect(
  (state: any) => ({
    authorizedUserId: state.login.data.authorizedUserId,
  })
)(Authorization);
