import React, { useContext } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import helper from '../../../../hocs/helper/helper';
import PostModalCommentsItemName from '../postModalCommentsItemName/PostModalCommentsItemName';
import { IPostModalCommentsItemProps } from './@types/postModalCommentsItem';
import './PostModalCommentsItem.scss';

const PostModalCommentsItem = ({
  date, text, img, firstName, lastName, id
}: IPostModalCommentsItemProps) => {
  const themeContext = useContext(ThemeContext);
  const PostModalCommentsItemNameWithHelper = helper(PostModalCommentsItemName, id);

  return (
    <li className={`${themeContext.darkTheme
      ? 'post-modal-comments__item post-modal-comments__item_dark'
      : 'post-modal-comments__item'}`}
    >
      <img
        className="post-modal-comments__img"
        src={img}
        alt="Аватар пользователя"
      />
      <div className="post-modal-comments__info">
        <div className="post-modal-comments__user">
          <PostModalCommentsItemNameWithHelper
            firstName={firstName}
            lastName={lastName}
          />
          <div className="post-modal-comments__date">{ date }</div>
        </div>
        <p className="post-modal-comments__text">{ text }</p>
      </div>
    </li>
  );
};

export default PostModalCommentsItem;
