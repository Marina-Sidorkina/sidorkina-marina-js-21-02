import React from 'react';
import UserInfo from '../userInfo/UserInfo';
import UserPosts from '../userPosts/UserPosts';

const User = () => (
  <div className="user">
    <UserInfo />
    <UserPosts />
  </div>
);

export default User;
