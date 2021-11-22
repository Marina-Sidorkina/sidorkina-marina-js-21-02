import React from 'react';
import './UserModal.scss';
import { CloseOutlined } from '@ant-design/icons';
import UserModalForm from '../userModalForm/UserModalForm';

const UserModal = () => (
  <div className="user-modal">
    <div className="user-modal__content">
      <button type="button" className="user-modal__button">
        <CloseOutlined style={{ color: '#ffffff', fontSize: '25px' }} />
      </button>
      <UserModalForm />
    </div>
  </div>
);

export default UserModal;
