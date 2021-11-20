import React from 'react';
import './PostsList.scss';
import PostsListItem from '../postsListItem/PostsListItem';

const PostsList = () => (
  <ul className="posts-list">
    <PostsListItem />
    <PostsListItem />
    <PostsListItem />
    <PostsListItem />
    <PostsListItem />
    <PostsListItem />
  </ul>
);

export default PostsList;
