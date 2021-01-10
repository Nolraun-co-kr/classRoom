import React from 'react';
import { Link } from 'react-router-dom';

const MobileHomeNav = () => {
  return (
    <nav className={'mobileHomeNav'}>
      <Link to={'/'} className={'active'}>
        내 강좌
      </Link>
      <Link to={'/'} >
        내 학습모듈
      </Link>
      <Link to={'/'} >
        내 학습활동
      </Link>
      <Link to={'/'} >
        강좌 마스터피스
      </Link>
    </nav>
  );
};

export default MobileHomeNav;
