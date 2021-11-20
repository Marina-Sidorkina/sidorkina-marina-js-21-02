import React from 'react';
import Main from '../../components/main/Main';
import UsersList from '../../components/usersList/UsersList';
import Paginator from '../../components/paginator/Paginator';

const Users = () => (
  <Main>
    <UsersList />
    <Paginator
      current={1}
      total={50}
      perPage={4}
      onPageChange={(page: number) => console.log(page)}
    />
  </Main>
);

export default Users;