import React from 'react';
import './UsersListItem.scss';
import { Link } from 'react-router-dom';
import { DEFAULT_IMAGE } from '../../../constants/components';

interface IUsersListItemProps {
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  id: string;
}

const UsersListItem = (props: IUsersListItemProps) => {
  const {
    title, firstName, lastName, picture, id
  } = props;
  return (
    <Link to={`/profile/${id}`} className="link-to-profile">
      <li className="users-list__item user-item">
        <img
          className="user-item__img"
          src={picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <div className="user-item__avatar">{`${title || ''} ${firstName} ${lastName}`}</div>
      </li>
    </Link>
  );
};

export default UsersListItem;