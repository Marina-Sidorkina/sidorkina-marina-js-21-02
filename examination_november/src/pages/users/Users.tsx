import React from 'react';
import './Users.scss';
import Main from '../../components/main/Main';
import UsersList from '../../components/usersList/UsersList';
import Paginator from '../../components/paginator/Paginator';

const Users = () => (
  <Main>
    <UsersList />
    <Paginator />
  </Main>
);

export default Users;
