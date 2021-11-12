import React, {useContext} from "react";
import "./User.scss";
import { IUserProps } from "../../@types/interfaces/components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

const User = (props: IUserProps) => {
  const { id, title, firstName, lastName, picture, index } = props;
  const themeContext = useContext(ThemeContext);

  return (
    <Link to={`/user/${ id }`} className="user__link">
      <div className={ `user ${ themeContext.darkTheme ? "user_dark" : "" }` }>
        <img className={`user__img ${ index === 0 ? "user__img_first" : ""}`} src={ picture } alt="User"/>
        <div className="user__info">
          <div className="user__id">{ id }</div>
          <span className="user__title">{ title ? `${title}.` : "" } </span>
          <span className="user__name">{ firstName } </span>
          <span className="user__surname">{ lastName }</span>
        </div>
      </div>
    </Link>
  );
}

export default User;
