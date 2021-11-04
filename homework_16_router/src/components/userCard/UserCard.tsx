import React, {useContext, useEffect, useState} from "react";
import "./UserCard.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getUserCard } from "../../api/dummyApi";
import { IDummyUserCard } from "../../@types/interfaces/dummyApi";
import { useParams } from "react-router-dom";

interface IParams {
  id: string;
}

const UserCard = () => {
  const [user, setUser] = useState({} as IDummyUserCard);
  const themeContext = useContext(ThemeContext)
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams() as IParams;

  useEffect(() => {
    getUserCard(params.id, setUser, console.error, () => setIsLoading(false));
  }, [])

  return (
    <div className={ `user-card ${ themeContext.darkTheme ? "user-card_dark" : "" }` }>
      { isLoading ? "Идёт загрузка" :
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
            <p className="user-card__info">{`Birth Date: ${user.dateOfBirth}`}</p>
            <p className="user-card__info">{`Location: ${user.location}`}</p>
            <p className="user-card__info">{`Email: ${user.email}`}</p>
            <p className="user-card__info">{`Phone: ${user.phone}`}</p>
            <p className="user-card__info">{`Registered: ${user.registerDate}`}</p>
          </div>
        </React.Fragment>
      }
    </div>
  );
}

export default UserCard;
