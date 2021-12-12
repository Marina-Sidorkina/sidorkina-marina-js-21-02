import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './UserPosts.module.scss';
import UserPostsItem from '../userPostsItem/UserPostsItem';
import { loadUserPosts, updateUserPostsPageAction } from '../../../redux/actions/userPosts';
import { IProxyPostPreview } from '../../../api/proxy/@types/proxy';
import { IUserPostsParams } from './@types/userPosts';
import '../../../locale/i18next';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { DEFAULT_PAGE } from '../../../constants/components';

const UserPosts = () => {
  const params = useParams() as IUserPostsParams;
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(updateUserPostsPageAction(DEFAULT_PAGE));
  }, []);

  useEffect(() => {
    dispatch(loadUserPosts(
      stateValues.userPosts.data.page - 1,
      stateValues.userPosts.data.perPage,
      params.id
    ));
  }, [stateValues.userPosts.data.page, params.id]);

  const elements = stateValues.userPosts.data.isLoading
    ? (
      <Spin
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
    : stateValues.userPosts.data.posts.map((item: IProxyPostPreview) => (
      <li key={item.id}>
        <UserPostsItem
          id={item.id}
          image={item.image}
          text={item.text}
        />
      </li>
    ));

  return (
    <ul className={styles.posts}>
      { stateValues.userPosts.data.error ? (
        <div>
          { t('errorText', {}) }
        </div>
      ) : elements }
    </ul>
  );
};

export default UserPosts;
