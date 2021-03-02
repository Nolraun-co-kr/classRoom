import React from 'react';
import { IoClose } from 'react-icons/all';

const Modal = ({ title, onClickClose, children, maxWidth, headerComponent }) => {
  return (
    <div className={'_modal'}>
      <div className={'_modal__content'} style={{ maxWidth: `${maxWidth}px` }}>
        <header className={'_modal__header'}>
          <h2>{title}</h2>
          {headerComponent}
          <button onClick={onClickClose}>
            <IoClose />
          </button>
        </header>
        <div className={'_modal__body _modal__body--bg-none'}>
          {children}
        </div>
        <div className={'_modal__foot'}>
          <div className={'_modal__actions'}>
            <button className={'submit'}>저장</button>
            <button onClick={onClickClose}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
