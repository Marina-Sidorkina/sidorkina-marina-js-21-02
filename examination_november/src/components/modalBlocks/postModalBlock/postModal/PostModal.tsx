import React from 'react';
import './PostModal.scss';
import { CloseOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Paginator from '../../../commonBlocks/paginator/Paginator';
import PostModalPost from '../postModalPost/PostModalPost';
import PostModalComments from '../postModalComments/PostModalComments';
import { closePostModalAction } from '../../../../redux/actions/postModal';
import {
  updatePostModalCommentsAction,
  updatePostModalCommentsPageAction
} from '../../../../redux/actions/postModalComments';

interface IPostModalProps {
  closeModal: Function;
  updatePostModalComments: Function;
  page: number;
  total: number;
  updatePostModalCommentsPage: Function;
}

const PostModal = (props: IPostModalProps) => {
  const {
    closeModal, updatePostModalComments, page, total, updatePostModalCommentsPage
  } = props;

  return (
    <div className="post-modal">
      <button
        type="button"
        className="post-modal__button"
        onClick={() => {
          updatePostModalComments([]);
          closeModal();
        }}
      >
        <CloseOutlined style={{ color: '#ffffff', fontSize: '25px' }} />
      </button>
      <div className="post-modal__content">
        <PostModalPost />
        <PostModalComments />
        <div className="post-modal__paginator">
          <Paginator
            current={page}
            total={total || 1}
            perPage={6}
            onPageChange={(newPage: number) => updatePostModalCommentsPage(newPage)}
            modal
          />
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state: any) => ({
    page: state.postModalComments.page,
    total: state.postModalComments.totalComments,
  }),
  (dispatch) => ({
    closeModal: bindActionCreators(closePostModalAction, dispatch),
    updatePostModalComments: bindActionCreators(updatePostModalCommentsAction, dispatch),
    updatePostModalCommentsPage: bindActionCreators(updatePostModalCommentsPageAction, dispatch)
  })
)(PostModal);
