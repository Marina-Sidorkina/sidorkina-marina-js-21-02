import React from 'react';
import './UserPostsItem.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openPostModalAction, setPostModalCurrenIdAction } from '../../../redux/actions/postModal';

interface IUserPostsItemProps {
  image: string;
  text: string;
  id: string;
  openModal: Function;
  setPostModalCurrenId: Function;
}

const UserPostsItem = (props: IUserPostsItemProps) => {
  const {
    image, text, id, setPostModalCurrenId, openModal
  } = props;

  const onItemClick = () => {
    openModal();
    setPostModalCurrenId(id);
  };

  return (
    <div className="user-posts__item user-post-item" onClick={onItemClick}>
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

export default connect(
  () => ({}),
  (dispatch) => ({
    openModal: bindActionCreators(openPostModalAction, dispatch),
    setPostModalCurrenId: bindActionCreators(setPostModalCurrenIdAction, dispatch)
  })
)(UserPostsItem);
