import React, { useContext, useEffect } from 'react';
import './PostModalPost.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import { getNewPostModalPost } from '../../../../redux/actions/postModalPost';
import { processPostsListItemDate } from '../../../../utils/components';
import helper from '../../../../hocs/helper/helper';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { IPostModalPostNameProps, IPostModalPostProps } from './@types/postModalPost';

const PostModalPostName = (props: IPostModalPostNameProps) => (
  <div className="post-modal-post__user-name">
    { `${props.firstName} ${props.lastName}` }
  </div>
);

const PostModalPost = (props: IPostModalPostProps) => {
  const {
    postId, getNewPostModal, post, isLoading, owner, error
  } = props;

  const PostsListNameWithHelper = helper(PostModalPostName, owner.id);

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    getNewPostModal(postId);
  }, []);

  const element = isLoading ? (
    <Spin
      className="post-modal-post__spinner"
      size="large"
      style={{
        width: '110px',
        height: '110px',
        position: 'absolute',
        top: '200px',
        left: 'calc(50% - 55px)'
      }}
    />
  ) : (
    <>
      <div className="post-modal-post__user-info">
        <div className="post-modal-post__user">
          <img
            className="post-modal-post__user-img"
            src={owner.picture}
            alt="Аватар пользователя"
          />
          <PostsListNameWithHelper
            firstName={owner.firstName}
            lastName={owner.lastName}
          />
        </div>
        <div className="post-modal-post__post-date">{ processPostsListItemDate(post.publishDate) }</div>
      </div>
      <img
        className="post-modal-post__img"
        src={post.image}
        alt="Пост пользователя"
      />
      <p className="post-modal-post__text">{ post.text }</p>
    </>
  );

  return (
    <div className={`${themeContext.darkTheme
      ? 'post-modal-post post-modal-post_dark'
      : 'post-modal-post'}`}
    >
      { error
        ? <div className="post-modal-post__error">Ошибка загрузки</div>
        : element }
    </div>
  );
};

export default connect(
  (state: any) => ({
    postId: state.postModal.currentPostId,
    post: state.postModalPost.post,
    owner: state.postModalPost.owner,
    isLoading: state.postModalPost.isLoading,
    error: state.postModalPost.error
  }),
  (dispatch) => ({
    getNewPostModal: bindActionCreators(getNewPostModalPost, dispatch)
  })
)(PostModalPost);
