import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../components/main/Main';
import PostsList from '../../components/postsList/PostsList';
import Paginator from '../../components/paginator/Paginator';
import { updatePostsListPageAction } from '../../redux/actions/postsList';

interface IPostsProps {
  page: number;
  total: number;
  perPage: number,
  updatePage: Function;
}

const Posts = (props: IPostsProps) => {
  const {
    page, total, perPage, updatePage
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
    </Main>
  );
};

export default connect(
  (state: any) => ({
    page: state.postsList.data.page,
    total: state.postsList.data.total,
    perPage: state.postsList.data.perPage,
  }),
  (dispatch) => ({
    updatePage: bindActionCreators(updatePostsListPageAction, dispatch)
  })
)(Posts);
