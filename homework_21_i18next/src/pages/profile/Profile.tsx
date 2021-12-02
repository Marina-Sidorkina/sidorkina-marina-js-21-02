import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../components/commonComponents/main/Main';
import Paginator from '../../components/commonComponents/paginator/Paginator';
import User from '../../components/userComponents/user/User';
import UserModal from '../../components/modalComponents/userModalComponents/userModal/UserModal';
import { updateUserPostsPageAction } from '../../redux/actions/userPosts';
import PostModal from '../../components/modalComponents/postModalComponents/postModal/PostModal';
import { IProfileProps } from './@types/profile';
import { DEFAULT_PAGE } from '../../constants/components';

const Profile = (props: IProfileProps) => {
  const {
    page, total, perPage, updatePage, modalIsOpened
  } = props;

  return (
    <Main>
      <User />
      <Paginator
        current={page}
        total={total || DEFAULT_PAGE}
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
