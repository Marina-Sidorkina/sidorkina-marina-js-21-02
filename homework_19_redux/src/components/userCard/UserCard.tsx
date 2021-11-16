import React, {useContext, useEffect, useRef, useState} from "react";
import "./UserCard.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IDummyUserCard } from "../../@types/interfaces/dummyApi";
import { useHistory, useParams } from "react-router-dom";
import {processDate} from "../../utils/components";
import {IUserCardParams} from "../../@types/interfaces/components";
import userCardStore from "../../stores/userCard";
import { loadUserCardAction } from "../../actions/userCard";

const UserCard = () => {
  const [user, setUser] = useState({} as IDummyUserCard);
  const themeContext = useContext(ThemeContext);
  const params = useParams() as IUserCardParams;
  const history = useHistory();
  const isUnmounted = useRef(false);

  useEffect(() => {
    userCardStore.on("change", () => {
      setUser(userCardStore.getUser());
    })
  }, [])

  useEffect(() => {
    isUnmounted.current = false;
    //updateShowNavItemsAction(false);
    loadUserCardAction(params.id);

    return () => {
      isUnmounted.current = true;
      userCardStore.removeAllListeners("change");
    };
  }, [params.id])

  return (
    <div className={ `user-card ${ themeContext.darkTheme ? "user-card_dark" : "" }` }>
      { userCardStore.getIsLoading() ? "Идёт загрузка..." :
        <React.Fragment>
          {user.picture ?
            <img className="user-card__img" src={user.picture} alt="User"/> : null }
          <div className="user-card__info">
            <div className="user-card__id">{user.id}</div>
            <div className="user-card__info user-card__info_main">
              {user.title ?
                <span className="user-card__title">{`${user.title}.`}</span> : null }
              <span className="user-card__name">{user.firstName} </span>
              <span className="user-card__surname">{user.lastName}</span>
            </div>
            {user.gender ?
              <p className="user-card__info">{`Gender: ${user.gender}`}</p> : null }
            {user.dateOfBirth ?
              <p className="user-card__info">{`Birth Date: ${processDate(user.dateOfBirth)}`}</p> : null }
            <p className="user-card__info">
              {user.location ?
                `Location: ${user.location.city ? user.location.city : null} (${user.location.country ? user.location.country : null })` : null}
            </p>
            <p className="user-card__info">{`Email: ${user.email}`}</p>
            {user.phone ?
              <p className="user-card__info">{`Phone: ${user.phone}`}</p> : null }
            <p className="user-card__info">{`Registered: ${processDate(user.registerDate)}`}</p>
            <button className="user-card__button"
                    type="button"
                    onClick={ history.goBack }>BACK</button>
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default UserCard;
