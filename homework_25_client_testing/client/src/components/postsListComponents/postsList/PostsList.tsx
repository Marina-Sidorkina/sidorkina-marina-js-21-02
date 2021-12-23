import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './PostsList.module.scss';
import PostsListItem from '../postsListItem/PostsListItem';
import { loadPostsList } from '../../../redux/actions/postsList';
import { IProxyPost } from '../../../api/proxy/@types/proxy';
import '../../../locale/i18next';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { RUSSIAN_LANGUAGE } from '../../../constants/components';

const PostsList = () => {
  const { t } = useTranslation();
  const language = useTypedSelector((state) => state.languageSelector.value);
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPostsList(
      stateValues.postsList.data.page - 1,
      stateValues.postsList.data.perPage
    ));
  }, [stateValues.postsList.data.page]);

  const elements = stateValues.postsList.data.isLoading
    ? (
      <Spin
        className={styles.spinner}
        tip={t('loadingText', {})}
        size="large"
        style={{
          width: '110px',
          height: '110px'
        }}
      />
    )
    : stateValues.postsList.data.posts.map((item: IProxyPost) => (
      <li key={item.id}>
        <PostsListItem
          id={item.id}
          avatar={item.owner.picture}
          image={item.image}
          text={item.text}
          date={language === RUSSIAN_LANGUAGE
            ? item.publishDate.ruDateAndTime
            : item.publishDate.enDateAndTime}
          firstName={item.owner.firstName}
          lastName={item.owner.lastName}
          title={item.owner.title}
          userId={item.owner.id}
        />
      </li>
    ));

  return (
    <ul className={styles.list}>
      { stateValues.postsList.data.error ? (
        <div className={styles.error}>
          { t('errorText', {}) }
        </div>
      ) : elements }
    </ul>
  );
};

export default PostsList;
