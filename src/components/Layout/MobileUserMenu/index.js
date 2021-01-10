import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/all';

const MobileUserMenu = ({ openUserMenu, onChangeOpenUserMenu }) => {
  return (
    <>
      <div
        className={`dim ${openUserMenu ? 'active' : ''}`}
        onClick={() => onChangeOpenUserMenu(false)}
      ></div>
      <nav className={`mobileUserMenu ${openUserMenu ? 'active' : ''}`}>
        <header className="mobileUserMenu__header">
          <div className="wrap">
            사용자 메뉴
            <button onClick={() => onChangeOpenUserMenu(false)}>
              <BsArrowRight />
            </button>
          </div>
        </header>
        <div className="mobileUserMenu__links">
          <Link to="">
            로그인
          </Link>
          <Link to="">
            회원가입
          </Link>
          <Link to="">
            내 학습현황
          </Link>
          <Link to="">
            내 예약현황
          </Link>
          <Link to="">
            로그아웃
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileUserMenu;
