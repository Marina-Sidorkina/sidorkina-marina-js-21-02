import React, { useContext } from 'react';
import './UserPostsItem.scss';
import { useDispatch } from 'react-redux';
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
      className={`${themeContext.darkTheme
        ? 'user-posts__item user-post-item user-post-item_dark'
        : 'user-posts__item user-post-item'}`}
      onClick={onItemClick}
    >
      <img
        className="user-post-item__photo"
        src={image}
        alt="Фото"
      />
      <p className="user-post-item__text">
        {text}
      </p>
    </div>
  );
};

export default UserPostsItem;
