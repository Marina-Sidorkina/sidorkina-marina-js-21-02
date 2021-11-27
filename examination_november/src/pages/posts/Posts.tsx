import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../components/commonComponents/main/Main';
import PostsList from '../../components/postsListComponents/postsList/PostsList';
import Paginator from '../../components/commonComponents/paginator/Paginator';
import { updatePostsListPageAction } from '../../redux/actions/postsList';
import PostModal from '../../components/modalComponents/postModalComponents/postModal/PostModal';
import { IPostsProps } from './@types/posts';
import { DEFAULT_PAGE } from '../../constants/components';

const Posts = (props: IPostsProps) => {
  const {
    page, total, perPage, updatePage, modalIsOpened
  } = props;

  useEffect(() => () => updatePage(DEFAULT_PAGE), []);

  return (
    <Main>
      <PostsList />
      <Paginator
        current={page}
        total={total}
        perPage={perPage}
        onPageChange={(value: number) => {
          updatePage(value);
        }}
      />
      { modalIsOpened ? <PostModal /> : null }
    </Main>
  );
};

export default connect(
  (state: any) => ({
    page: state.postsList.data.page,
    total: state.postsList.data.total,
    perPage: state.postsList.data.perPage,
    modalIsOpened: state.postModal.isOpened
  }),
  (dispatch) => ({
    updatePage: bindActionCreators(updatePostsListPageAction, dispatch)
  })
)(Posts);
