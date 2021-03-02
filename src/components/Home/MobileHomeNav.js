import React from 'react';
import { Link } from 'react-router-dom';

const MobileHomeNav = () => {
  return (
    <nav className={'mobileHomeNav'}>
      <Link to={'/'} className={'active'}>
        대시보드
      </Link>
      <Link to={'/'} >
        내강좌
      </Link>
      <Link to={'/'} >
        그룹
      </Link>
      <Link to={'/'} >
        채팅
      </Link>
      <Link to={'/'} >
        캘린더
      </Link>
    </nav>
  );
};

export default MobileHomeNav;
