import React from 'react';
import './PostModal.scss';
import { CloseOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paginator from '../../../commonBlocks/paginator/Paginator';
import PostModalPost from '../postModalPost/PostModalPost';
import PostModalComments from '../postModalComments/PostModalComments';
import { closePostModalAction } from '../../../../redux/actions/postModal';

interface IPostModalProps {
  closeModal: Function;
}

const PostModal = (props: IPostModalProps) => {
  const { closeModal } = props;

  return (
    <div className="post-modal">
      <button
        type="button"
        className="post-modal__button"
        onClick={() => closeModal()}
      >
        <CloseOutlined style={{ color: '#ffffff', fontSize: '25px' }} />
      </button>
      <div className="post-modal__content">
        <PostModalPost />
        <PostModalComments />
        <div className="post-modal__paginator">
          <Paginator
            current={1}
            total={50}
            perPage={4}
            onPageChange={(page: number) => console.log(page)}
            modal
          />
        </div>
      </div>
    </div>
  );
};

export default connect(
  () => ({}),
  (dispatch) => ({
    closeModal: bindActionCreators(closePostModalAction, dispatch)
  })
)(PostModal);
