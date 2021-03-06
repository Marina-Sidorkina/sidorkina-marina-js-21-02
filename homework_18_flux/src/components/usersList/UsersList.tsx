import React, {useEffect, useState} from "react";
import "./UsersList.scss";
import { IUsersListProps } from "../../@types/interfaces/components";
import User from "../user/User";
import helper from "../../hocs/helper/helper";
import { IDummyUser } from "../../@types/interfaces/dummyApi";
import usersListStore from "../../stores/usersList";
import { loadUsersListAction } from "../../actions/usersList";
import {
  updateCurrentMenuItemAction,
  updateShowNavItemsAction
} from "../../actions/app";

const UsersList = (props: IUsersListProps) => {
  const [list, setList] = useState([] as IDummyUser[]);
  const { currentPage, perPageLimit } = props;

  useEffect(() => {
    updateShowNavItemsAction(true);
    updateCurrentMenuItemAction("main");
    loadUsersListAction(currentPage - 1, perPageLimit);

    usersListStore.on("change", () => {
      setList(usersListStore.getUsers());
    });

    return () => {
      usersListStore.removeAllListeners("change");
    };
  }, [currentPage, perPageLimit]);

  const elements = usersListStore.getIsLoading() ? null : list.map((item, index) => {
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

export default UsersList;
