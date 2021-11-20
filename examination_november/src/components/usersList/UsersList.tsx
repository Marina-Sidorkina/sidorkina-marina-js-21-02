import React from 'react';
import './UsersList.scss';
import UsersListItem from '../usersListItem/UsersListItem';

const UsersList = () => (
  <ul className="users-list">
    <UsersListItem />
    <UsersListItem />
    <UsersListItem />
    <UsersListItem />
    <UsersListItem />
    <UsersListItem />
  </ul>
);

export default UsersList;
