import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './UsersListItem.module.scss';
import { DEFAULT_IMAGE } from '../../../constants/components';
import helper from '../../../hocs/helper/helper';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { IUsersListItemProps, IUsersListItemNameProps } from './@types/usersListItem';
import { getTitleValue } from '../../../utils/components';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const UsersListItemName = (props: IUsersListItemNameProps) => {
  const language = useTypedSelector((state) => state.languageSelector.value);

  return (
    <div className="user-item__avatar">
      {`${props.title ? `${getTitleValue(props.title, language)}` : ''} ${props.firstName} ${props.lastName}`}
    </div>
  );
};

const UsersListItem = (props: IUsersListItemProps) => {
  const {
    title, firstName, lastName, picture, id
  } = props;

  const UserNameWithHelper = helper(UsersListItemName, id);
  const themeContext = useContext(ThemeContext);

  return (
    <Link to={`/profile/${id}`} className={styles.link}>
      <li className={themeContext.darkTheme
        ? `${styles.item} ${styles.item_dark}`
        : styles.item}
      >
        <img
          className={styles.img}
          src={picture || DEFAULT_IMAGE}
          alt="Аватар пользователя"
        />
        <UserNameWithHelper
          firstName={firstName}
          lastName={lastName}
          title={title}
        />
      </li>
    </Link>
  );
};

export default UsersListItem;
