import React, { useEffect } from 'react';
import './UsersList.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import UsersListItem from '../usersListItem/UsersListItem';
import { loadUsersList } from '../../redux/actions/usersList';

interface IUserListItem {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface IUserListProps {
  isLoading: boolean;
  users: IUserListItem[];
  loadUsers: Function;
  page: number;
  perPage: number;
}

const UsersList = (props: IUserListProps) => {
  const {
    loadUsers, users, isLoading, page, perPage
  } = props;

  useEffect(() => {
    loadUsers(page - 1, perPage);
  }, [page]);

  const elements = isLoading
    ? (
      <Spin
        className="users-list__spinner"
        tip="Loading..."
        size="large"
        style={{ width: '80px', height: '80px' }}
      />
    )
    : users.map((item: IUserListItem) => (
      <UsersListItem
        key={item.id}
        title={item.title}
        firstName={item.firstName}
        lastName={item.lastName}
        picture={item.picture}
      />
    ));

  return (
    <ul className="users-list">
      { elements }
    </ul>
  );
};

export default connect(
  (state: any) => ({
    users: state.usersList.data.users,
    error: state.usersList.data.error,
    isLoading: state.usersList.data.isLoading,
    page: state.usersList.data.page,
    perPage: state.usersList.data.perPage
  }),
  (dispatch) => ({
    loadUsers: bindActionCreators(loadUsersList, dispatch)
  })
)(UsersList);
