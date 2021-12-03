import React, { useEffect } from 'react';
import './UsersList.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import UsersListItem from '../usersListItem/UsersListItem';
import { loadUsersList } from '../../../redux/actions/usersList';
import { IUserListItem, IUserListProps } from './@types/usersList';
import '../../../locale/i18next';

const UsersList = (props: IUserListProps) => {
  const {
    loadUsers, users, isLoading, page, perPage, error
  } = props;
  const { t } = useTranslation();

  useEffect(() => {
    loadUsers(page - 1, perPage);
  }, [page]);

  const elements = isLoading
    ? (
      <Spin
        className="users-list__spinner"
        tip={t('loadingText', {})}
        size="large"
        style={{
          width: '110px',
          height: '110px'
        }}
      />
    )
    : users.map((item: IUserListItem) => (
      <UsersListItem
        key={item.id}
        id={item.id}
        title={item.title}
        firstName={item.firstName}
        lastName={item.lastName}
        picture={item.picture}
      />
    ));

  return (
    <ul className="users-list">
      { error ? (
        <div className="users-list__error">
          { t('errorText', {}) }
        </div>
      ) : elements }
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