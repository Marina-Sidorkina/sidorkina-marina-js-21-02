import React, { useEffect } from 'react';
import './PostsList.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import PostsListItem from '../postsListItem/PostsListItem';
import { loadPostsList } from '../../../redux/actions/postsList';
import { IDummyPost } from '../../../api/dummyApi/@types/dummyApi';
import { processPostsListItemDate } from '../../../utils/components';
import { IPostsListProps } from './@types/postsList';

const PostsList = (props: IPostsListProps) => {
  const {
    loadPosts, posts, isLoading, page, perPage, error
  } = props;

  useEffect(() => {
    loadPosts(page - 1, perPage);
  }, [page]);

  const elements = isLoading
    ? (
      <Spin
        className="users-list__spinner"
        tip="Идёт загрузка..."
        size="large"
        style={{
          width: '110px',
          height: '110px'
        }}
      />
    )
    : posts.map((item: IDummyPost) => (
      <li key={item.id} className="posts-list__item">
        <PostsListItem
          id={item.id}
          avatar={item.owner.picture}
          image={item.image}
          text={item.text}
          date={processPostsListItemDate(item.publishDate)}
          firstName={item.owner.firstName}
          lastName={item.owner.lastName}
          title={item.owner.title}
          userId={item.owner.id}
        />
      </li>
    ));

  return (
    <ul className="posts-list">
      { error ? <div className="posts-list__error">Ошибка загрузки...</div> : elements }
    </ul>
  );
};

export default connect(
  (state: any) => ({
    posts: state.postsList.data.posts,
    error: state.postsList.data.error,
    isLoading: state.postsList.data.isLoading,
    page: state.postsList.data.page,
    perPage: state.postsList.data.perPage
  }),
  (dispatch) => ({
    loadPosts: bindActionCreators(loadPostsList, dispatch)
  })
)(PostsList);
