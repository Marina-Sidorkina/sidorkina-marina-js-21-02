import React from 'react';
import './PostModal.scss';
import { CloseOutlined } from '@ant-design/icons';
import Paginator from '../paginator/Paginator';
import PostModalPost from '../postModalPost/PostModalPost';
import PostModalComments from '../postModalComments/PostModalComments';

const PostModal = () => (
  <div className="post-modal">
    <div className="post-modal__content">
      <button type="button" className="post-modal__button">
        <CloseOutlined style={{ color: '#ffffff', fontSize: '25px' }} />
      </button>
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

export default PostModal;
