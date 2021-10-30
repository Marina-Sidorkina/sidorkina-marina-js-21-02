import React from "react";
import "./UsersList.css";
import { IUsersListProps } from "../../@types/interfaces/components";
import User from "../user/User";

class UsersList extends React.Component<IUsersListProps> {
  render() {
    const { list } = this.props;

    const elements = list.map((item) => (
      <li className="users-list__item" key={ item.id }>
        <User id={ item.id }
              title={ item.title }
              firstName={ item.firstName }
              lastName={ item.lastName }
              picture={ item.picture }/>
      </li>
    ));

    return (
      <ul className="users-list main__users-list">
        { elements }
      </ul>
    );
  }
}

export default UsersList;
