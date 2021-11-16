import React, { useContext, useEffect } from "react";
import "./UserCard.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useHistory, useParams } from "react-router-dom";
import { processDate } from "../../utils/components";
import { IUserCardParams } from "../../@types/interfaces/components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateIsLoadingAction, updateShowNavItemsAction } from "../../redux/actions/app";
import { updateUserCardAction, toggleUserCardLoadingAction } from "../../redux/actions/userCard";
import { getUserCard } from "../../api/dummyApi";

const UserCard = (props: any) => {
  const themeContext = useContext(ThemeContext);
  const params = useParams() as IUserCardParams;
  const history = useHistory();
  const { updateShowNavItems, user, isLoading, updateUserCard, toggleUserCardLoading,
    updateIsLoading } = props;

  useEffect(() => {
    updateShowNavItems(false);
    toggleUserCardLoading();
    updateIsLoading(true);

    getUserCard(params.id)
      .then((response) => {
        updateUserCard(response);
        updateIsLoading(false);
      })
  }, [params.id, updateShowNavItems, toggleUserCardLoading, updateUserCard, updateIsLoading])

  return (
    <div className={ `user-card ${ themeContext.darkTheme ? "user-card_dark" : "" }` }>
      { isLoading ? "Идёт загрузка..." :
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

export default connect(
  (state: any) => ({
    isLoading:  state.userCard.data.isLoading,
    user: state.userCard.data.user
  }),
  (dispatch) => ({
    updateShowNavItems: bindActionCreators(updateShowNavItemsAction, dispatch),
    toggleUserCardLoading: bindActionCreators(toggleUserCardLoadingAction, dispatch),
    updateUserCard: bindActionCreators(updateUserCardAction, dispatch),
    updateIsLoading: bindActionCreators(updateIsLoadingAction, dispatch)
  })
)(UserCard);