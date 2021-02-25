import React from 'react';
import { IoClose } from 'react-icons/all';

const Modal = ({ title, onClickClose, children }) => {
  return (
    <div className={'_modal'}>
      <div className={'_modal__content'}>
        <header className={'_modal__header'}>
          <h2>{title}</h2>
          <button onClick={onClickClose}>
            <IoClose />
          </button>
        </header>
        <div className={'_modal__body'}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
