import React from "react";
import "./UsersList.scss";
import { IUsersListProps } from "../../@types/interfaces/components";
import User from "../user/User";
import helper from "../../hocs/helper/helper";

const UsersList = (props: IUsersListProps) => {
  const { list } = props;

  const elements = list.map((item, index) => {
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
