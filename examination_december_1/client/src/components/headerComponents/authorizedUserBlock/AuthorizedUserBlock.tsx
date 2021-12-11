import React, { useContext } from 'react';
import './AuthorizedUserBlock.scss';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  resetAuthorizedUserAction,
} from '../../../redux/actions/login';
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
    <div className="authorized-user-block">
      <div className="authorized-user-block__item">
        <img
          className={`${themeContext.darkTheme
            ? 'authorized-user-block__user-photo authorized-user-block__user-photo_dark'
            : 'authorized-user-block__user-photo'}`}
          src={stateValues.login.data.authorizedUserPicture}
          alt="Фото пользователя"
        />
        <Link
          to={`/profile/${stateValues.login.data.authorizedUserId}`}
          className="authorized-user-block__link"
        >
          <span className="authorized-user-block__user-name">
            { stateValues.login.data.authorizedUserName }
          </span>
        </Link>
      </div>
      <div className="authorized-user-block__item">
        <span className="authorized-user-block__logout" onClick={onClickHandler}>
          { t('authorization.logout', {}) }
        </span>
      </div>
    </div>
  );
};

export default AuthorizedUserBlock;
