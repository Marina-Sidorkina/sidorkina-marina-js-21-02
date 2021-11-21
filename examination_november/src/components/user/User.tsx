import React from 'react';
import UserInfo from '../userInfo/UserInfo';
import UserPosts from '../userPosts/userPosts';

const User = () => (
  <div className="user">
    <UserInfo />
    <UserPosts />
  </div>
);

export default User;
