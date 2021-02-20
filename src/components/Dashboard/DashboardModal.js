import React from 'react';
import { GrClose } from 'react-icons/gr';

const Modal = ({ title, onClickClose, children, maxWidth }) => {
  return (
    <div className={'_modal'}>
      <div className={'_modal__content'} style={{ maxWidth: `${maxWidth}px` }}>
        <header className={'_modal__header'}>
          <h2>{title}</h2>
          <button onClick={onClickClose}>
            <GrClose />
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
