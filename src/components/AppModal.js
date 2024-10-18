import React from 'react';
import { Modal, TitleBar } from '@react95/core';

// Компонент для модального окна с содержимым
const AppModal = ({ isOpen, onClose, title, icon, children }) => (
  isOpen && (
    <Modal
      icon={icon}
      title={title}
      titleBarOptions={[<TitleBar.Close key="close" onClick={onClose} />]}
      width="300px"
      height="400px"
    >
      {children}
    </Modal>
  )
);

export default AppModal;
