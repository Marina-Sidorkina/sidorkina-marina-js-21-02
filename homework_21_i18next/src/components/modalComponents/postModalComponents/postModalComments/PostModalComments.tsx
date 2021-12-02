import React, { useContext, useEffect } from 'react';
import './PostModalComments.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useTranslation } from 'react-i18next';
import { processPostsListItemDate } from '../../../../utils/components';
import { getPostModalCommentsListAction } from '../../../../redux/actions/postModalComments';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import helper from '../../../../hocs/helper/helper';
import {
  IPostModalCommentsItemNameProps,
  IPostModalCommentsItemProps,
  IPostModalCommentsProps
} from './@types/postModalComments';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import '../../../../locale/i18next';

const PostModalCommentsItemName = (props: IPostModalCommentsItemNameProps) => (
  <div className="post-modal-comments__name">
    {`${props.firstName} ${props.lastName}`}
  </div>
);

const PostModalCommentsItem = ({
  date, text, img, firstName, lastName, id
}: IPostModalCommentsItemProps) => {
  const themeContext = useContext(ThemeContext);
  const PostModalCommentsItemNameWithHelper = helper(PostModalCommentsItemName, id);

  return (
    <li className={`${themeContext.darkTheme
      ? 'post-modal-comments__item post-modal-comments__item_dark'
      : 'post-modal-comments__item'}`}
    >
      <img
        className="post-modal-comments__img"
        src={img}
        alt="Аватар пользователя"
      />
      <div className="post-modal-comments__info">
        <div className="post-modal-comments__user">
          <PostModalCommentsItemNameWithHelper
            firstName={firstName}
            lastName={lastName}
          />
          <div className="post-modal-comments__date">{ date }</div>
        </div>
        <p className="post-modal-comments__text">{ text }</p>
      </div>
    </li>
  );
};

const PostModalComments = (props: IPostModalCommentsProps) => {
  const {
    comments, owners, error, isLoading, getPostModalCommentsList, currentPostId,
    limit, page
  } = props;
  const language = useTypedSelector((state) => state.languageSelector.value);
  const { t } = useTranslation();

  useEffect(() => {
    getPostModalCommentsList(page - 1, limit, currentPostId);
  }, [currentPostId, page]);

  const getCommentsList = () => {
    if (comments.length) {
      return comments.map((comment, index) => (
        <PostModalCommentsItem
          key={comment.id}
          firstName={owners[index].firstName}
          lastName={owners[index].lastName}
          id={owners[index].id}
          date={processPostsListItemDate(comment.publishDate, language)}
          text={comment.message}
          img={owners[index].picture}
        />
      ));
    }
    return (
      <div>
        { t('postComments.default', {}) }
      </div>
    );
  };

  const elements = isLoading
    ? (
      <div className="post-modal-comments__loading">
        { t('postComments.loading', {}) }
      </div>
    )
    : getCommentsList();
  return (
    <ul className="post-modal-comments">
      { error ? (
        <div className="post-modal-comments__error">
          { t('postComments.error', {}) }
        </div>
      ) : elements }
    </ul>
  );
};

export default connect(
  (state: any) => ({
    comments: state.postModalComments.comments,
    owners: state.postModalComments.owners,
    isLoading: state.postModalComments.isLoading,
    error: state.postModalComments.error,
    limit: state.postModalComments.limit,
    page: state.postModalComments.page,
    currentPostId: state.postModal.currentPostId
  }),
  (dispatch) => ({
    getPostModalCommentsList: bindActionCreators(getPostModalCommentsListAction, dispatch)
  })
)(PostModalComments);
