import React from 'react';
import Main from '../../components/main/Main';
import Paginator from '../../components/paginator/Paginator';
import User from '../../components/user/User';
import UserModal from '../../components/userModal/UserModal';

const Profile = () => (
  <Main>
    <User />
    <Paginator
      current={1}
      total={50}
      perPage={4}
      onPageChange={(page: number) => console.log(page)}
    />
    <UserModal />
  </Main>
);

export default Profile;
