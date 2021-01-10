import React from 'react';
import { Link } from 'react-router-dom';

const MobileHomeBottomNav = () => {
  return (
    <nav className={'mobileHomeBottomNav'}>
      <Link to={'/'} className={'mbn1 active'}>
        <p>대시보드</p>
      </Link>
      <Link to={'/'} className={'mbn2 '}>
        <p>내 강좌</p>
      </Link>
      <Link to={'/'} className={'mbn3 '}>
        <p>캘린더</p>
      </Link>
      <Link to={'/'} className={'mbn4 '}>
        <p>그룹</p>
      </Link>
    </nav>
  );
};

export default MobileHomeBottomNav;
