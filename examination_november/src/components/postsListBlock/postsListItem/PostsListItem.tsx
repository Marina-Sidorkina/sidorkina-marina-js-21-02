import React from 'react';
import './PostsListItem.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openPostModalAction, setPostModalCurrenIdAction } from '../../../redux/actions/postModal';

interface IPostsListItem {
  name: string;
  date: string | null;
  text: string;
  image: string;
  avatar: string;
  openModal: Function;
  id: string;
  setPostModalCurrenId: Function;
}

const PostsListItem = (props: IPostsListItem) => {
  const {
    name, date, text, image, avatar, openModal, id, setPostModalCurrenId
  } = props;

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
          <div className="post-item__name">{ name }</div>
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
