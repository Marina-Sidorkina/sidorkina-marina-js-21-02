import React, { useEffect } from "react";
import "./UsersList.scss";
import User from "../user/User";
import helper from "../../hocs/helper/helper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateShowNavItemsAction,
  updateCurrentMenuItemAction,
  updateItemsAmountAction,
  updateIsLoadingAction
} from "../../redux/actions/app";
import { toggleUsersListLoadingAction, updateUsersListAction } from "../../redux/actions/usersList";
import { getUsersList } from "../../api/dummyApi";

const UsersList = (props: any) => {
  const { users, currentPage, perPageLimit, updateShowNavItems,
    updateCurrentMenuItem, updateUsersList, isLoading,
    toggleUsersListLoading, updateItemsAmount, updateIsLoading } = props;

  useEffect(() => {
    updateShowNavItems(true);
    updateCurrentMenuItem("main");
    toggleUsersListLoading();
    updateIsLoading(true);

    getUsersList(currentPage - 1, perPageLimit)
      .then((response) => {
        updateUsersList(response);
        updateItemsAmount(response.total);
        updateIsLoading(false);
      })
  }, [currentPage, perPageLimit, updateShowNavItems,
    updateCurrentMenuItem, toggleUsersListLoading, updateUsersList,
    updateItemsAmount, updateIsLoading]);

  const elements = isLoading ? null : users.map((item: any, index: any) => {
    const UserWithHelper = helper(User, item.id);
    return (
      <li className="users-list__item" key={item.id}>
        <UserWithHelper id={item.id}
                        title={item.title}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        picture={item.picture}
                        index={index} />
      </li>
    )
  });

  return (
    <ul className="users-list main__users-list">
      { elements }
    </ul>
  );
}

export default connect(
  (state: any) => ({
    currentPage: state.app.settings.currentPage,
    perPageLimit: state.app.settings.perPageLimit,
    isLoading:  state.usersList.data.isLoading,
    users: state.usersList.data.users
  }),
  (dispatch) => ({
    updateShowNavItems: bindActionCreators(updateShowNavItemsAction, dispatch),
    updateCurrentMenuItem: bindActionCreators(updateCurrentMenuItemAction, dispatch),
    updateUsersList: bindActionCreators(updateUsersListAction, dispatch),
    toggleUsersListLoading: bindActionCreators(toggleUsersListLoadingAction, dispatch),
    updateItemsAmount: bindActionCreators(updateItemsAmountAction, dispatch),
    updateIsLoading: bindActionCreators(updateIsLoadingAction, dispatch),
  })
)(UsersList);
