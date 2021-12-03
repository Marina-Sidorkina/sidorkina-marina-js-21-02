import React, { useContext } from 'react';
import './PostModal.scss';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import Paginator from '../../../commonComponents/paginator/Paginator';
import PostModalPost from '../postModalPost/PostModalPost';
import PostModalComments from '../postModalComments/PostModalComments';
import { closePostModalAction } from '../../../../redux/actions/postModal';
import {
  updatePostModalCommentsAction,
  updatePostModalCommentsPageAction
} from '../../../../redux/actions/postModalComments';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { COMMENTS_PER_PAGE, DEFAULT_PAGES_AMOUNT } from '../../../../constants/components';

const PostModal = () => {
  const themeContext = useContext(ThemeContext);
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="post-modal">
      <button
        type="button"
        className="post-modal__button"
        onClick={() => {
          dispatch(updatePostModalCommentsAction([]));
          dispatch(closePostModalAction());
        }}
      >
        <CloseOutlined style={{ color: '#ffffff', fontSize: '25px' }} />
      </button>
      <div className={`${themeContext.darkTheme
        ? 'post-modal__content post-modal__content_dark'
        : 'post-modal__content'}`}
      >
        <PostModalPost />
        <PostModalComments />
        <div className="post-modal__paginator">
          <Paginator
            current={stateValues.postModalComments.page}
            total={stateValues.postModalComments.totalComments || DEFAULT_PAGES_AMOUNT}
            perPage={COMMENTS_PER_PAGE}
            onPageChange={(newPage: number) => {
              dispatch(updatePostModalCommentsPageAction(newPage));
            }}
            modal
          />
        </div>
      </div>
    </div>
  );
};

export default PostModal;
