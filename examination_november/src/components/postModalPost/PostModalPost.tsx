import React, { useEffect } from 'react';
import './PostModalPost.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import { getNewPostModalPost } from '../../redux/actions/postModalPost';
import { IDummyOwner, IDummyPostFull } from '../../@types/dummyApi';
import { processPostsListItemDate } from '../../utils/components';

interface IPostModalPostProps {
  postId: string;
  getNewPostModal: Function;
  post: IDummyPostFull;
  isLoading: boolean;
  owner: IDummyOwner;
  error: boolean;
}

const PostModalPost = (props: IPostModalPostProps) => {
  const {
    postId, getNewPostModal, post, isLoading, owner, error
  } = props;

  useEffect(() => {
    getNewPostModal(postId);
  }, []);

  return (
    <div className="post-modal-post">
      {error ? <div className="post-modal-post__error">Ошибка загрузки</div> : null}
      {isLoading ? (
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
              <div className="post-modal-post__user-name">{ `${owner.firstName} ${owner.lastName}` }</div>
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
      )}
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
