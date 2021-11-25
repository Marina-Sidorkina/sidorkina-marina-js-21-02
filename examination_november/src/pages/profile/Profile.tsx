import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../components/commonBlocks/main/Main';
import Paginator from '../../components/commonBlocks/paginator/Paginator';
import User from '../../components/userBlock/user/User';
import UserModal from '../../components/modalBlocks/userModalBlock/userModal/UserModal';
import { updateUserPostsPageAction } from '../../redux/actions/userPosts';
import PostModal from '../../components/modalBlocks/postModalBlock/postModal/PostModal';

interface IProfileProps {
  page: number;
  total: number;
  perPage: number,
  updatePage: Function;
  modalIsOpened: Function;
}

const Profile = (props: IProfileProps) => {
  const {
    page, total, perPage, updatePage, modalIsOpened
  } = props;

  return (
    <Main>
      <User />
      <Paginator
        current={page}
        total={total || 1}
        perPage={perPage}
        onPageChange={(value: number) => {
          updatePage(value);
        }}
      />
      <UserModal />
      { modalIsOpened ? <PostModal /> : null }
    </Main>
  );
};

export default connect(
  (state: any) => ({
    page: state.userPosts.data.page,
    total: state.userPosts.data.total,
    perPage: state.userPosts.data.perPage,
    modalIsOpened: state.postModal.isOpened
  }),
  (dispatch) => ({
    updatePage: bindActionCreators(updateUserPostsPageAction, dispatch)
  })
)(Profile);
