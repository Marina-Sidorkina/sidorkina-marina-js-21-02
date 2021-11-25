import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../components/commonBlocks/main/Main';
import PostsList from '../../components/postsListBlock/postsList/PostsList';
import Paginator from '../../components/commonBlocks/paginator/Paginator';
import { updatePostsListPageAction } from '../../redux/actions/postsList';
import PostModal from '../../components/modalBlocks/postModalBlock/postModal/PostModal';

interface IPostsProps {
  page: number;
  total: number;
  perPage: number,
  updatePage: Function;
  modalIsOpened: boolean;
}

const Posts = (props: IPostsProps) => {
  const {
    page, total, perPage, updatePage, modalIsOpened
  } = props;

  useEffect(() => () => updatePage(1), []);

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
