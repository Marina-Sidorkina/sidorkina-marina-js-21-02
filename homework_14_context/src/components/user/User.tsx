import React from "react";
import "./User.css";
import { IUserProps } from "../../@types/interfaces/components";

class User extends React.Component<IUserProps> {
  render() {
    const { id, title, firstName, lastName, picture } = this.props;

    return (
      <div className="user">
        <img className="user__img" src={ picture } alt="User"/>
        <div className="user__info">
          <div className="user__id">{ id }</div>
          <span className="user__title">{ title } </span>
          <span className="user__name">{ firstName } </span>
          <span className="user__surname">{ lastName }</span>
        </div>
      </div>
    );
  }
}

export default User;
