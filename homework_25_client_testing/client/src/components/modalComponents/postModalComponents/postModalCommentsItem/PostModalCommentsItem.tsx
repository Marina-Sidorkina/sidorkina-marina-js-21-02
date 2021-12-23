import React, { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import helper from '../../../../hocs/helper/helper';
import PostModalCommentsItemName from '../postModalCommentsItemName/PostModalCommentsItemName';
import { IPostModalCommentsItemProps } from './@types/postModalCommentsItem';
import styles from './PostModalCommentsItem.module.scss';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { RUSSIAN_LANGUAGE } from '../../../../constants/components';

const PostModalCommentsItem = ({
  date, text, img, firstName, lastName, id
}: IPostModalCommentsItemProps) => {
  const themeContext = useContext(ThemeContext);
  const PostModalCommentsItemNameWithHelper = helper(PostModalCommentsItemName, id);
  const language = useTypedSelector((state) => state.languageSelector.value);

  return (
    <li className={themeContext.darkTheme
      ? `${styles.comment} ${styles.comment_dark}`
      : styles.comment}
    >
      <img
        className={styles.img}
        src={img}
        alt="Аватар пользователя"
      />
      <div className={styles.info}>
        <div className={styles.user}>
          <PostModalCommentsItemNameWithHelper
            firstName={firstName}
            lastName={lastName}
          />
          <div className={styles.date}>
            { language === RUSSIAN_LANGUAGE ? date.ruDateAndTime : date.enDateAndTime }
          </div>
        </div>
        <p className={styles.text}>{ text }</p>
      </div>
    </li>
  );
};

export default PostModalCommentsItem;
