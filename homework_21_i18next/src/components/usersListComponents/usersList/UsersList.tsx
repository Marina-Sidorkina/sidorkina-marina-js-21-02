import React, { useEffect } from 'react';
import './UsersList.scss';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import UsersListItem from '../usersListItem/UsersListItem';
import { loadUsersList } from '../../../redux/actions/usersList';
import { IUserListItem } from './@types/usersList';
import '../../../locale/i18next';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';

const UsersList = () => {
  const { t } = useTranslation();
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsersList(
      stateValues.usersList.data.page - 1,
      stateValues.usersList.data.perPage
    ));
  }, [stateValues.usersList.data.page]);

  const elements = stateValues.usersList.data.isLoading
    ? (
      <Spin
        className="users-list__spinner"
        tip={t('loadingText', {})}
        size="large"
        style={{
          width: '110px',
          height: '110px'
        }}
      />
    )
    : stateValues.usersList.data.users.map((item: IUserListItem) => (
      <UsersListItem
        key={item.id}
        id={item.id}
        title={item.title}
        firstName={item.firstName}
        lastName={item.lastName}
        picture={item.picture}
      />
    ));

  return (
    <ul className="users-list">
      { stateValues.usersList.data.error ? (
        <div className="users-list__error">
          { t('errorText', {}) }
        </div>
      ) : elements }
    </ul>
  );
};

export default UsersList;
