import React, {useContext, useEffect, useState} from "react";
import "./UserCard.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getUserCard } from "../../api/dummyApi";
import { IDummyUserCard } from "../../@types/interfaces/dummyApi";
import { useHistory, useParams } from "react-router-dom";
import {processDate} from "../../utils/components";
import { IUserCardProps, IUserCardParams } from "../../@types/interfaces/components";

const UserCard = (props: IUserCardProps) => {
  const [user, setUser] = useState({} as IDummyUserCard);
  const themeContext = useContext(ThemeContext)
  const [userIsLoading, setUserIsLoading] = useState(true);
  const params = useParams() as IUserCardParams;
  const history = useHistory();
  const { setIsLoading, setShowNavItems } = props;

  useEffect(() => {
    const updateUser = (data: IDummyUserCard) => {
      setUser(data);
      setIsLoading(false);
      setUserIsLoading(false)
    }

    setIsLoading(true);

    getUserCard(params.id, updateUser, console.error);

    setShowNavItems(false);

  }, [setIsLoading, params.id, setShowNavItems])

  return (
    <div className={ `user-card ${ themeContext.darkTheme ? "user-card_dark" : "" }` }>
      { userIsLoading ? "Идёт загрузка..." :
        <React.Fragment>
          {user.picture ?
            <img className="user-card__img" src={user.picture} alt="User"/> : null }
          <div className="user-card__info">
            <div className="user-card__id">{user.id}</div>
            <div className="user-card__info user-card__info_main">
              {user.title ?
                <span className="user-card__title">{`${user.title}.`} </span> : null }
              <span className="user-card__name">{user.firstName} </span>
              <span className="user-card__surname">{user.lastName}</span>
            </div>
            {user.gender ?
              <p className="user-card__info">{`Gender: ${user.gender}`}</p> : null }
            {user.dateOfBirth ?
              <p className="user-card__info">{`Birth Date: ${processDate(user.dateOfBirth)}`}</p> : null }
            <p className="user-card__info">
              {user.location ?
                `Location: ${user.location.city || null} (${user.location.country || null })` : null }
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
