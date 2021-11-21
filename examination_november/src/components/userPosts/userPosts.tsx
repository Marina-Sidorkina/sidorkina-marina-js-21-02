import React from 'react';
import './userPosts.scss';
import UserPostsItem from '../userPostsItem/UserPostsItem';

const UserPosts = () => (
  <ul className="user-posts">
    <UserPostsItem />
    <UserPostsItem />
    <UserPostsItem />
  </ul>
);

export default UserPosts;
