import React from 'react';
import './UsersListItem.scss';
import { Link } from 'react-router-dom';

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
          src={picture}
          alt="Аватар пользователя"
        />
        <div className="user-item__avatar">{`${title} ${firstName} ${lastName}`}</div>
      </li>
    </Link>
  );
};

export default UsersListItem;
