import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styles from './PostsListItem.module.scss';
import { openPostModalAction, setPostModalCurrenIdAction } from '../../../redux/actions/postModal';
import helper from '../../../hocs/helper/helper';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { IPostsListItemNameProps, IPostsListItem } from './@types/postsListItem';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { getTitleValue } from '../../../utils/getValues';

const PostsListItemName = (props: IPostsListItemNameProps) => {
  const language = useTypedSelector((state) => state.languageSelector.value);

  return (
    <div className={styles.userName}>
      {`${props.title ? `${getTitleValue(props.title, language)}` : ''} ${props.firstName} ${props.lastName}`}
    </div>
  );
};

const PostsListItem = (props: IPostsListItem) => {
  const {
    date, text, image, avatar, id,
    firstName, lastName, title, userId
  } = props;

  const PostsListNameWithHelper = helper(PostsListItemName, userId);
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onItemClick = () => {
    dispatch(openPostModalAction());
    dispatch(setPostModalCurrenIdAction(id));
  };

  return (
    <div
      className={themeContext.darkTheme
        ? `${styles.item} ${styles.item_dark}`
        : styles.item}
      onClick={onItemClick}
    >
      <div className={styles.userBlock}>
        <img
          className={styles.userImg}
          src={avatar}
          alt="Аватар пользователя"
        />
        <div className={styles.user}>
          <PostsListNameWithHelper
            firstName={firstName}
            lastName={lastName}
            title={title}
          />
          <div className={styles.date}>{ date }</div>
        </div>
      </div>
      <img
        className={styles.post}
        src={image}
        alt="Пост пользователя"
      />
      <p className={styles.text}>{ text }</p>
    </div>
  );
};

export default PostsListItem;
