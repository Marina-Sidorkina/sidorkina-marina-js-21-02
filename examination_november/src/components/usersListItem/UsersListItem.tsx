import React from 'react';
import './UsersListItem.scss';

interface IUsersListItemProps {
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

const UsersListItem = (props: IUsersListItemProps) => {
  const {
    title, firstName, lastName, picture,
  } = props;
  return (
    <li className="users-list__item user-item">
      <img
        className="user-item__img"
        src={picture}
        alt="Аватар пользователя"
      />
      <div className="user-item__avatar">{`${title} ${firstName} ${lastName}`}</div>
    </li>
  );
};

export default UsersListItem;
