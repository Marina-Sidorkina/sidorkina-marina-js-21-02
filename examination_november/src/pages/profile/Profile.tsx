import React from 'react';
import Main from '../../components/main/Main';
import Paginator from '../../components/paginator/Paginator';
import User from '../../components/user/User';

const Profile = () => (
  <Main>
    <User />
    <Paginator
      current={1}
      total={50}
      perPage={4}
      onPageChange={(page: number) => console.log(page)}
    />
  </Main>
);

export default Profile;
