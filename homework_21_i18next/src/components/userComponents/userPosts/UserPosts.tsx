import React, { useEffect } from 'react';
import './UserPosts.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import UserPostsItem from '../userPostsItem/UserPostsItem';
import { loadUserPosts, updateUserPostsPageAction } from '../../../redux/actions/userPosts';
import { IDummyPostPreview } from '../../../api/dummyApi/@types/dummyApi';
import { IUserPostsProps, IUserPostsParams } from './@types/userPosts';
import '../../../locale/i18next';

const UserPosts = (props: IUserPostsProps) => {
  const params = useParams() as IUserPostsParams;
  const { t } = useTranslation();

  const {
    isLoading, page, perPage, posts, loadPosts, updatePage, error
  } = props;

  useEffect(() => () => updatePage(1), []);

  useEffect(() => {
    loadPosts(page - 1, perPage, params.id);
  }, [page, params.id]);

  const elements = isLoading
    ? (
      <Spin
        className="user-posts__spinner"
        tip={t('loadingText', {})}
        size="large"
        style={{
          width: '110px',
          height: '110px',
          position: 'absolute',
          top: 'calc(50% - 55px)',
          left: 'calc(50% - 55px)'
        }}
      />
    )
    : posts.map((item: IDummyPostPreview) => (
      <li key={item.id} className="user-posts__item">
        <UserPostsItem
          id={item.id}
          image={item.image}
          text={item.text}
        />
      </li>
    ));

  return (
    <ul className="user-posts">
      { error ? (
        <div className="posts-list__error">
          { t('errorText', {}) }
        </div>
      ) : elements }
    </ul>
  );
};

export default connect(
  (state: any) => ({
    posts: state.userPosts.data.posts,
    error: state.userPosts.data.error,
    isLoading: state.userPosts.data.isLoading,
    page: state.userPosts.data.page,
    perPage: state.userPosts.data.perPage
  }),
  (dispatch) => ({
    loadPosts: bindActionCreators(loadUserPosts, dispatch),
    updatePage: bindActionCreators(updateUserPostsPageAction, dispatch)
  })
)(UserPosts);