import React from 'react';
import './User.scss';
import UserInfo from '../userInfo/UserInfo';
import UserPosts from '../userPosts/userPosts';

const User = () => (
  <div className="user">
    <UserInfo />
    <UserPosts />
  </div>
);

export default User;
