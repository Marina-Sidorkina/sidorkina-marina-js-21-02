import React from 'react';
import './UserPostsItem.scss';

interface IUserPostsItemProps {
  image: string;
  text: string;
}

const UserPostsItem = (props: IUserPostsItemProps) => {
  const { image, text } = props;

  return (
    <li className="user-posts__item user-post-item">
      <img
        className="user-post-item__photo"
        src={image}
        alt="Фото"
      />
      <p className="user-post-item__text">
        {text}
      </p>
    </li>
  );
};

export default UserPostsItem;
