import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './PostModalPost.module.scss';
import { getNewPostModalPost } from '../../../../redux/actions/postModalPost';
import helper from '../../../../hocs/helper/helper';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { IPostModalPostNameProps } from './@types/postModalPost';
import '../../../../locale/i18next';
import { RUSSIAN_LANGUAGE } from '../../../../constants/components';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

const PostModalPostName = (props: IPostModalPostNameProps) => (
  <div className={styles.userName}>
    { `${props.firstName} ${props.lastName}` }
  </div>
);

const PostModalPost = () => {
  const themeContext = useContext(ThemeContext);
  const { t } = useTranslation();
  const language = useTypedSelector((state) => state.languageSelector.value);
  const getDateValue = (date: { enDateAndTime: string, ruDateAndTime: string }) => (
    language === RUSSIAN_LANGUAGE ? date.ruDateAndTime : date.enDateAndTime
  );
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const PostsListNameWithHelper = helper(PostModalPostName, stateValues.postModalPost.owner.id);

  useEffect(() => {
    dispatch(getNewPostModalPost(stateValues.postModal.currentPostId));
  }, []);

  const element = stateValues.postModalPost.isLoading ? (
    <Spin
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
      <div className={styles.userInfo}>
        <div className={styles.user}>
          <img
            className={styles.userImg}
            src={stateValues.postModalPost.owner.picture}
            alt="Аватар пользователя"
          />
          <PostsListNameWithHelper
            firstName={stateValues.postModalPost.owner.firstName}
            lastName={stateValues.postModalPost.owner.lastName}
          />
        </div>
        <div className={styles.postDate}>
          { stateValues.postModalPost.post.publishDate ? getDateValue(stateValues.postModalPost.post.publishDate) : '' }
        </div>
      </div>
      <img
        className={styles.img}
        src={stateValues.postModalPost.post.image}
        alt="Пост пользователя"
      />
      <p className={styles.text}>{ stateValues.postModalPost.post.text }</p>
    </>
  );

  return (
    <div className={themeContext.darkTheme
      ? `${styles.modalPost} ${styles.modalPost_dark}`
      : styles.modalPost}
    >
      { stateValues.postModalPost.error
        ? (
          <div className={styles.error}>
            { t('errorText', {}) }
          </div>
        )
        : element }
    </div>
  );
};

export default PostModalPost;
