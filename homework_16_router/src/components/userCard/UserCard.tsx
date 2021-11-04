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
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams() as IUserCardParams;
  const history = useHistory();

  const updateUser = (data: IDummyUserCard) => {
    setUser(data);
    props.setIsLoading(false);
    setIsLoading(false)
  }

  useEffect(() => {
    props.setIsLoading(true);
    getUserCard(params.id, updateUser, console.error);
    props.setShowNavItems(false);
  }, [])

  return (
    <div className={ `user-card ${ themeContext.darkTheme ? "user-card_dark" : "" }` }>
      { isLoading ? "Идёт загрузка..." :
        <React.Fragment>
          <img className="user-card__img" src={user.picture} alt="User"/>
          <div className="user-card__info">
            <div className="user-card__id">{user.id}</div>
            <div className="user-card__info user-card__info_main">
              <span className="user-card__title">{`${user.title}.`} </span>
              <span className="user-card__name">{user.firstName} </span>
              <span className="user-card__surname">{user.lastName}</span>
            </div>
            <p className="user-card__info">{`Gender: ${user.gender}`}</p>
            <p className="user-card__info">{`Birth Date: ${processDate(user.dateOfBirth)}`}</p>
            <p className="user-card__info">
              {`Location: ${user.location.city} (${user.location.country})`}
            </p>
            <p className="user-card__info">{`Email: ${user.email}`}</p>
            <p className="user-card__info">{`Phone: ${user.phone}`}</p>
            <p className="user-card__info">{`Registered: ${processDate(user.registerDate)}`}</p>
            <button className="user-card__button"
                    type="button"
                    onClick={ history.goBack }>На главную</button>
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default UserCard;
