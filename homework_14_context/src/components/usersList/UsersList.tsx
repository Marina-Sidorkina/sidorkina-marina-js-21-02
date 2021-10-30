import React from "react";
import "./UsersList.css";
import { IUsersListProps } from "../../@types/interfaces/components";
import User from "../user/User";
import helper from "../../hocs/helper/helper";

class UsersList extends React.Component<IUsersListProps> {
  render() {
    const { list, userClassName } = this.props;

    const elements = list.map((item, index) => {
      const UserWithHelper = helper(User, item.id);
      return (
        <li className="users-list__item" key={item.id}>
          <UserWithHelper id={item.id}
                title={item.title}
                firstName={item.firstName}
                lastName={item.lastName}
                picture={item.picture}
                index={index}
                className={ userClassName }/>
        </li>
      )
    });

    return (
      <ul className="users-list main__users-list">
        { elements }
      </ul>
    );
  }
}

export default UsersList;
