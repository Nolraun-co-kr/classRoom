import React from 'react';

const ListWrapper = ({ children, title, options }) => {
  return (
    <div className={'listwrapper'}>
      <div className={'list__header'}>
        <h2>{title}</h2>
        <div className="select">
          <select name="" id="">
            <option value="">강좌 서비스 종류에 따라 모아보기</option>
          </select>
        </div>
      </div>

      <div className={'list__body'}>
        {children}
      </div>
    </div>
  );
};

export default ListWrapper;
