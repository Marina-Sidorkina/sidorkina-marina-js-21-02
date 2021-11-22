import React from 'react';
import Main from '../../components/main/Main';
import PostsList from '../../components/postsList/PostsList';
import Paginator from '../../components/paginator/Paginator';

const Posts = () => (
  <Main>
    <PostsList />
    <Paginator
      current={1}
      total={50}
      perPage={4}
      onPageChange={(page: number) => console.log(page)}
    />
  </Main>
);

export default Posts;
