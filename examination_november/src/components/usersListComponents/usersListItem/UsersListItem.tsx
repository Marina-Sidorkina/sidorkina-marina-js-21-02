import React, { useContext } from 'react';
import './UsersListItem.scss';
import { Link } from 'react-router-dom';
import { DEFAULT_IMAGE } from '../../../constants/components';
import helper from '../../../hocs/helper/helper';
import { ThemeContext } from '../../../contexts/ThemeContext';

interface IUsersListItemProps {
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  id: string;
}

interface IUsersListItemNameProps {
  title: string;
  firstName: string;
  lastName: string;
}

const UsersListItemName = (props: IUsersListItemNameProps) => (
  <div className="user-item__avatar">
    {`${props.title ? `${props.title}.` : ''} ${props.firstName} ${props.lastName}`}
  </div>
);

const UsersListItem = (props: IUsersListItemProps) => {
  const {
    title, firstName, lastName, picture, id
  } = props;

  const UserNameWithHelper = helper(UsersListItemName, id);
  const themeContext = useContext(ThemeContext);

  return (
    <Link to={`/profile/${id}`} className="link-to-profile">
      <li className={`users-list__item user-item ${themeContext.darkTheme
        ? 'user-item_dark' : ''}`}
      >
        <img
          className="user-item__img"
          src={picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <UserNameWithHelper
          className={`${themeContext.darkTheme
            ? 'user-item__name user-item__name_dark' : 'user-item__name'}`}
          firstName={firstName}
          lastName={lastName}
          title={title}
        />
      </li>
    </Link>
  );
};

export default UsersListItem;
