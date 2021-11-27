import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../components/commonComponents/main/Main';
import UsersList from '../../components/usersListComponents/usersList/UsersList';
import Paginator from '../../components/commonComponents/paginator/Paginator';
import { updateUsersListPageAction } from '../../redux/actions/usersList';

interface IUsersProps {
  page: number;
  total: number;
  perPage: number,
  updatePage: Function;
}

const Users = (props: IUsersProps) => {
  const {
    page, total, perPage, updatePage
  } = props;

  useEffect(() => () => updatePage(1), []);

  return (
    <Main>
      <UsersList />
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
    page: state.usersList.data.page,
    total: state.usersList.data.total,
    perPage: state.usersList.data.perPage,
  }),
  (dispatch) => ({
    updatePage: bindActionCreators(updateUsersListPageAction, dispatch)
  })
)(Users);
