import React, { useContext } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import styles from './UserModal.module.scss';
import UserModalForm from '../userModalForm/UserModalForm';
import { closeUserModalAction } from '../../../../redux/actions/userModalForm';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';

const UserModal = () => {
  const themeContext = useContext(ThemeContext);
  const stateValues = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className={stateValues.userModal.isOpened
      ? `${styles.modal} ${styles.modal_opened}`
      : styles.modal}
    >
      <div className={themeContext.darkTheme
        ? `${styles.content} ${styles.content_dark}`
        : styles.content}
      >
        <button type="button" className={styles.button}>
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
