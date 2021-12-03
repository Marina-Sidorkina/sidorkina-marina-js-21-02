import React, { useContext } from 'react';
import './UserModal.scss';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import UserModalForm from '../userModalForm/UserModalForm';
import { closeUserModalAction } from '../../../../redux/actions/userModalForm';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

const UserModal = () => {
  const themeContext = useContext(ThemeContext);
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={`user-modal ${stateValues.userModal.isOpened ? 'user-modal_opened' : ''}`}>
      <div className={`${themeContext.darkTheme
        ? 'user-modal__content user-modal__content_dark'
        : 'user-modal__content'}`}
      >
        <button type="button" className="user-modal__button">
          <CloseOutlined
            style={{ color: '#ffffff', fontSize: '25px' }}
            onClick={() => {
              dispatch(closeUserModalAction());
            }}
          />
        </button>
        <UserModalForm />
        { stateValues.userModal.isLoading
          ? (
            <Spin
              className="registration__spinner"
              size="large"
              style={{
                width: '110px',
                height: '110px',
                position: 'absolute',
                top: '130px',
                left: 'calc(50% - 55px)'
              }}
            />
          ) : null }

      </div>
    </div>
  );
};

export default UserModal;
