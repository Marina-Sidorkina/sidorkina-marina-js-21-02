import React from 'react';
import './PostsListItem.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openPostModalAction, setPostModalCurrenIdAction } from '../../../redux/actions/postModal';
import helper from '../../../hocs/helper/helper';

interface IPostsListItem {
  firstName: string;
  lastName: string;
  title: string;
  date: string | null;
  text: string;
  image: string;
  avatar: string;
  openModal: Function;
  id: string;
  userId: string;
  setPostModalCurrenId: Function;
}

interface IPostsListItemNameProps {
  title: string;
  firstName: string;
  lastName: string;
}

const PostsListItemName = (props: IPostsListItemNameProps) => (
  <div className="post-item__name">
    {`${props.title || ''} ${props.firstName} ${props.lastName}`}
  </div>
);

const PostsListItem = (props: IPostsListItem) => {
  const {
    date, text, image, avatar, openModal, id, setPostModalCurrenId,
    firstName, lastName, title, userId
  } = props;
  const PostsListNameWithHelper = helper(PostsListItemName, userId);

  const onItemClick = () => {
    openModal();
    setPostModalCurrenId(id);
  };

  return (
    <div className="posts-list__item post-item" onClick={onItemClick}>
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

export default connect(
  () => ({}),
  (dispatch) => ({
    openModal: bindActionCreators(openPostModalAction, dispatch),
    setPostModalCurrenId: bindActionCreators(setPostModalCurrenIdAction, dispatch)
  })
)(PostsListItem);
