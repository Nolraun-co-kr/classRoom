import React from 'react';
import { AiOutlineClose } from 'react-icons/all';
import { Link } from 'react-router-dom';
import NavBody from '../Nav/NavBody';

const MobileNav = ({ openMobileNav, onChangeOpenMobileNav }) => {
  return (
      <>
        <div
          className={`dim ${openMobileNav ? 'active' : ''}`}
          onClick={() => onChangeOpenMobileNav(false)}
        ></div>

        <nav className={`mobileNav ${openMobileNav ? 'active' : ''}`}>
          <header className="mobileNav__header">
            <div className="wrap">
              <Link to={'/'}>
                <img src={'/assets/images/white-logo.png'} />
              </Link>
              <div className="search">
                <input type="text" placeholder={'검색어를 입력해 주세요.'}/>
                <button>검색</button>
              </div>
              <button className={'close'} onClick={() => onChangeOpenMobileNav(false)}>
                <AiOutlineClose />
              </button>
            </div>
          </header>
          <div className="mobileNav__links">
            <NavBody />
          </div>
        </nav>
      </>
  );
};

export default MobileNav;
