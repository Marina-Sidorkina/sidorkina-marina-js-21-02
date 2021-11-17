import React, { useContext, useEffect } from 'react';
import './UserCard.scss';
import { useHistory, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { processDate } from '../../utils/components';
import { ThemeContext } from '../../contexts/ThemeContext';
import { updateShowNavItemsAction } from '../../redux/actions/app';
import { loadUserCard } from '../../redux/actions/userCard';
import { IDummyUserCard } from '../../@types/interfaces/dummyApi';

export interface IUserCardParams {
  id: string;
}

interface IUserCardProps {
  isLoading: boolean;
  user: IDummyUserCard;
  updateShowNavItems: Function;
  loadUser: Function;
  error: any;
}

const UserCard = (props: IUserCardProps) => {
  const themeContext = useContext(ThemeContext);
  const params = useParams() as IUserCardParams;
  const history = useHistory();
  const {
    updateShowNavItems, user, isLoading, loadUser, error
  } = props;

  useEffect(() => {
    updateShowNavItems(false);
    loadUser(params.id);
  }, [params.id, updateShowNavItems]);

  return (
    <div className={`user-card ${themeContext.darkTheme ? 'user-card_dark' : ''}`}>
      { isLoading ? 'Идёт загрузка...' : (
        <>
          {user.picture
            ? <img className="user-card__img" src={user.picture} alt="User" /> : null }
          <div className="user-card__info">
            <div className="user-card__id">{user.id}</div>
            <div className="user-card__info user-card__info_main">
              {user.title
                ? <span className="user-card__title">{`${user.title}.`}</span> : null }
              <span className="user-card__name">
                {user.firstName}
                {' '}
              </span>
              <span className="user-card__surname">{user.lastName}</span>
            </div>
            {user.gender
              ? <p className="user-card__info">{`Gender: ${user.gender}`}</p> : null }
            {user.dateOfBirth
              ? <p className="user-card__info">{`Birth Date: ${processDate(user.dateOfBirth)}`}</p> : null }
            <p className="user-card__info">
              {user.location
                ? `Location:
                ${user.location.city ? user.location.city : null}
                (${user.location.country ? user.location.country : null})` : null}
            </p>
            <p className="user-card__info">{`Email: ${user.email}`}</p>
            {user.phone
              ? <p className="user-card__info">{`Phone: ${user.phone}`}</p> : null }
            <p className="user-card__info">{`Registered: ${processDate(user.registerDate)}`}</p>
            <button
              className="user-card__button"
              type="button"
              onClick={history.goBack}
            >
              BACK
            </button>
            { error ? <div>Something has gone wrong. Please, try again later...</div> : null }
          </div>
        </>
      )}
    </div>
  );
};

export default connect(
  (state: any) => ({
    isLoading: state.userCard.data.isLoading,
    user: state.userCard.data.user,
    error: state.userCard.data.error
  }),
  (dispatch) => ({
    updateShowNavItems: bindActionCreators(updateShowNavItemsAction, dispatch),
    loadUser: bindActionCreators(loadUserCard, dispatch)
  })
)(UserCard);
