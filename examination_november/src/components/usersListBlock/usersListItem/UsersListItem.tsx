import React from 'react';
import './UsersListItem.scss';
import { Link } from 'react-router-dom';
import { DEFAULT_IMAGE } from '../../../constants/components';
import helper from '../../../hocs/helper/helper';

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
    {`${props.title || ''} ${props.firstName} ${props.lastName}`}
  </div>
);

const UsersListItem = (props: IUsersListItemProps) => {
  const {
    title, firstName, lastName, picture, id
  } = props;
  const UserNameWithHelper = helper(UsersListItemName, id);

  return (
    <Link to={`/profile/${id}`} className="link-to-profile">
      <li className="users-list__item user-item">
        <img
          className="user-item__img"
          src={picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <UserNameWithHelper
          firstName={firstName}
          lastName={lastName}
          title={title}
        />
      </li>
    </Link>
  );
};

export default UsersListItem;
