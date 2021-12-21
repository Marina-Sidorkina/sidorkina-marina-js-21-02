import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import styles from './UserPostsItem.module.scss';
import { openPostModalAction, setPostModalCurrenIdAction } from '../../../redux/actions/postModal';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { IUserPostsItemProps } from './@types/userPostsItem';

const UserPostsItem = (props: IUserPostsItemProps) => {
  const { image, text, id } = props;
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch();

  const onItemClick = () => {
    dispatch(openPostModalAction());
    dispatch(setPostModalCurrenIdAction(id));
  };

  return (
    <div
      className={themeContext.darkTheme
        ? `${styles.post} ${styles.post_dark}`
        : styles.post}
      onClick={onItemClick}
    >
      <img
        className={styles.photo}
        src={image}
        alt="Фото"
      />
      <p className={styles.text}>
        {text}
      </p>
    </div>
  );
};

export default UserPostsItem;
