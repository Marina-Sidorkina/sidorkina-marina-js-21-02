import React, { useContext, useEffect } from 'react';
import './PostModalPost.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { getNewPostModalPost } from '../../../../redux/actions/postModalPost';
import helper from '../../../../hocs/helper/helper';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { IPostModalPostNameProps, IPostModalPostProps } from './@types/postModalPost';
import '../../../../locale/i18next';
import { RUSSIAN_LANGUAGE } from '../../../../constants/components';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

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
  const { t } = useTranslation();
  const language = useTypedSelector((state) => state.languageSelector.value);
  const getDateValue = (date: { enDateAndTime: string, ruDateAndTime: string }) => (
    language === RUSSIAN_LANGUAGE ? date.ruDateAndTime : date.enDateAndTime
  );

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
        <div className="post-modal-post__post-date">
          { post.publishDate ? getDateValue(post.publishDate) : '' }
        </div>
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
        ? (
          <div className="post-modal-post__error">
            { t('errorText', {}) }
          </div>
        )
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
