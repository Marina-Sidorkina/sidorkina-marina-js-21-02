import React, { useContext } from 'react';
import './UserModal.scss';
import { CloseOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';
import UserModalForm from '../userModalForm/UserModalForm';
import { closeUserModalAction } from '../../../../redux/actions/userModalForm';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { IUserModalProps } from './@types/userModal';

const UserModal = (props: IUserModalProps) => {
  const {
    isOpened, closeModal, isLoading
  } = props;

  const themeContext = useContext(ThemeContext);

  return (
    <div className={`user-modal ${isOpened ? 'user-modal_opened' : ''}`}>
      <div className={`${themeContext.darkTheme
        ? 'user-modal__content user-modal__content_dark'
        : 'user-modal__content'}`}
      >
        <button type="button" className="user-modal__button">
          <CloseOutlined
            style={{ color: '#ffffff', fontSize: '25px' }}
            onClick={() => {
              closeModal();
            }}
          />
        </button>
        <UserModalForm />
        {isLoading
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
          ) : null}

      </div>
    </div>
  );
};

export default connect(
  (state: any) => ({
    isOpened: state.userModal.isOpened,
    isLoading: state.userModal.isLoading
  }),
  (dispatch) => ({
    closeModal: bindActionCreators(closeUserModalAction, dispatch)
  })
)(UserModal);
