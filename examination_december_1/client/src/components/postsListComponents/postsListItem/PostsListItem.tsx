import React, { useContext } from 'react';
import './PostsListItem.scss';
import { useDispatch } from 'react-redux';
import { openPostModalAction, setPostModalCurrenIdAction } from '../../../redux/actions/postModal';
import helper from '../../../hocs/helper/helper';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { IPostsListItemNameProps, IPostsListItem } from './@types/postsListItem';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { getTitleValue } from '../../../utils/components';

const PostsListItemName = (props: IPostsListItemNameProps) => {
  const language = useTypedSelector((state) => state.languageSelector.value);

  return (
    <div className="post-item__name">
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
      className={`${themeContext.darkTheme
        ? 'posts-list__item post-item post-item_dark'
        : 'posts-list__item post-item'}`}
      onClick={onItemClick}
    >
      <div className="post-item__user-block">
        <img
          className="post-item__user-img"
          src={avatar}
          alt="Аватар пользователя"
        />
        <div className="post-item__user">
          <PostsListNameWithHelper
            firstName={firstName}
            lastName={lastName}
            title={title}
          />
          <div className="post-item__date">{ date }</div>
        </div>
      </div>
      <img
        className="post-item__post"
        src={image}
        alt="Пост пользователя"
      />
      <p className="post-item__text">{ text }</p>
    </div>
  );
};

export default PostsListItem;
