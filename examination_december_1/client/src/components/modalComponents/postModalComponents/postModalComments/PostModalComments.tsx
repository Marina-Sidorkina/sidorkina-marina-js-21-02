import React, { useEffect } from 'react';
import './PostModalComments.scss';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getPostModalCommentsListAction } from '../../../../redux/actions/postModalComments';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import '../../../../locale/i18next';
import PostModalCommentsItem from '../postModalCommentsItem/PostModalCommentsItem';

const PostModalComments = () => {
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostModalCommentsListAction(
      stateValues.postModalComments.page - 1,
      stateValues.postModalComments.limit,
      stateValues.postModal.currentPostId
    ));
  }, [stateValues.postModal.currentPostId, stateValues.postModalComments.page]);

  const getCommentsList = () => {
    if (stateValues.postModalComments.comments.length) {
      return stateValues.postModalComments.comments
        .map((comment, index) => (
          <PostModalCommentsItem
            key={comment.id}
            firstName={stateValues.postModalComments.owners[index].firstName}
            lastName={stateValues.postModalComments.owners[index].lastName}
            id={stateValues.postModalComments.owners[index].id}
            date={comment.publishDate}
            text={comment.message}
            img={stateValues.postModalComments.owners[index].picture}
          />
        ));
    }
    return (
      <div>
        { t('postComments.default', {}) }
      </div>
    );
  };

  const elements = stateValues.postModalComments.isLoading
    ? (
      <div className="post-modal-comments__loading">
        { t('postComments.loading', {}) }
      </div>
    )
    : getCommentsList();

  return (
    <ul className="post-modal-comments">
      { stateValues.postModalComments.error ? (
        <div className="post-modal-comments__error">
          { t('postComments.error', {}) }
        </div>
      ) : elements }
    </ul>
  );
};

export default PostModalComments;
