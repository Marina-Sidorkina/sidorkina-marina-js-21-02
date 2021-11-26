import React, { useContext } from 'react';
import './AuthorizedUserBlock.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {
  resetAuthorizedUserAction,
} from '../../../redux/actions/login';
import { ThemeContext } from '../../../contexts/ThemeContext';

interface IAuthorizedUserBlockProps {
  resetUser: Function;
  authorizedUserId: string;
  authorizedUserName: string;
  authorizedUserPicture: string;
}

const AuthorizedUserBlock = (props: IAuthorizedUserBlockProps) => {
  const {
    authorizedUserName, authorizedUserPicture, resetUser, authorizedUserId
  } = props;

  const onClickHandler = (evt: any) => {
    resetUser();
    evt.preventDefault();
  };

  const themeContext = useContext(ThemeContext);

  return (
    <div className="authorized-user-block">
      <div className="authorized-user-block__item">
        <img
          className={`${themeContext.darkTheme
            ? 'authorized-user-block__user-photo authorized-user-block__user-photo_dark'
            : 'authorized-user-block__user-photo'}`}
          src={authorizedUserPicture}
          alt="Фото пользователя"
        />
        <Link to={`/profile/${authorizedUserId}`} className="authorized-user-block__link">
          <span className="authorized-user-block__user-name">{ authorizedUserName }</span>
        </Link>
      </div>
      <div className="authorized-user-block__item">
        <span className="authorized-user-block__logout" onClick={onClickHandler}>выход</span>
      </div>
    </div>
  );
};

export default connect(
  (state: any) => ({
    userData: state.login.data.authorizedUserData,
    authorizedUserId: state.login.data.authorizedUserId,
    authorizedUserName: state.login.data.authorizedUserName,
    authorizedUserPicture: state.login.data.authorizedUserPicture
  }),
  (dispatch) => ({
    resetUser: bindActionCreators(resetAuthorizedUserAction, dispatch)
  })
)(AuthorizedUserBlock);
