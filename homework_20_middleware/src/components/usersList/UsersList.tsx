import React, { useEffect } from 'react';
import './UsersList.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../user/User';
import helper from '../../hocs/helper/helper';
import {
  updateShowNavItemsAction,
  updateCurrentMenuItemAction,
} from '../../redux/actions/app';
import { loadUsersList } from '../../redux/actions/usersList';

interface IUserListItem {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

interface IUserListProps {
  currentPage: number;
  perPageLimit: number;
  isLoading: boolean;
  users: IUserListItem[];
  updateShowNavItems: Function;
  updateCurrentMenuItem: Function;
  loadUsers: Function;
}

const UsersList = (props: IUserListProps) => {
  const {
    users, currentPage, perPageLimit, updateShowNavItems,
    updateCurrentMenuItem, isLoading, loadUsers
  } = props;

  useEffect(() => {
    updateShowNavItems(true);
    updateCurrentMenuItem('main');
    loadUsers(currentPage - 1, perPageLimit);
  }, [currentPage, perPageLimit, updateShowNavItems,
    updateCurrentMenuItem]);

  const elements = isLoading ? null : users.map((item: IUserListItem, index: number) => {
    const UserWithHelper = helper(User, item.id);
    return (
      <li className="users-list__item" key={item.id}>
        <UserWithHelper
          id={item.id}
          title={item.title}
          firstName={item.firstName}
          lastName={item.lastName}
          picture={item.picture}
          index={index}
        />
      </li>
    );
  });

  return (
    <ul className="users-list main__users-list">
      { elements }
    </ul>
  );
};

export default connect(
  (state: any) => ({
    currentPage: state.app.settings.currentPage,
    perPageLimit: state.app.settings.perPageLimit,
    isLoading: state.usersList.data.isLoading,
    users: state.usersList.data.users
  }),
  (dispatch) => ({
    updateShowNavItems: bindActionCreators(updateShowNavItemsAction, dispatch),
    updateCurrentMenuItem: bindActionCreators(updateCurrentMenuItemAction, dispatch),
    loadUsers: bindActionCreators(loadUsersList, dispatch)
  })
)(UsersList);
