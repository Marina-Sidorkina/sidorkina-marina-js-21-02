import React, { useContext, useEffect } from 'react';
import './PostModalComments.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { IDummyComment, IDummyOwner } from '../../../../api/dummyApi/@types/dummyApi';
import { processPostsListItemDate } from '../../../../utils/components';
import { getPostModalCommentsListAction } from '../../../../redux/actions/postModalComments';
import { ThemeContext } from '../../../../contexts/ThemeContext';

interface IPostModalCommentsItemProps {
  name: string;
  date: string | null;
  text: string;
  img: string;
}

interface IPostModalCommentsProps {
  comments: IDummyComment[];
  owners: IDummyOwner[];
  isLoading: boolean;
  error: boolean;
  getPostModalCommentsList: Function;
  currentPostId: string;
  limit: number;
  page: number;
}

const PostModalCommentsItem = ({
  name, date, text, img
}: IPostModalCommentsItemProps) => {
  const themeContext = useContext(ThemeContext);

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
          <div className="post-modal-comments__name">{ name }</div>
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

  useEffect(() => {
    getPostModalCommentsList(page - 1, limit, currentPostId);
  }, [currentPostId, page]);

  const getCommentsList = () => {
    if (comments.length) {
      return comments.map((comment, index) => (
        <PostModalCommentsItem
          key={comment.id}
          name={`${owners[index].firstName} ${owners[index].firstName}`}
          date={processPostsListItemDate(comment.publishDate)}
          text={comment.message}
          img={owners[index].picture}
        />
      ));
    }
    return <div>Комментариев пока нет...</div>;
  };

  const elements = isLoading
    ? <div className="post-modal-comments__loading">Идёт загрузка комментариев...</div>
    : getCommentsList();
  return (
    <ul className="post-modal-comments">
      { error ? <div className="post-modal-comments__error">Ошибка загрузки</div> : elements }
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
