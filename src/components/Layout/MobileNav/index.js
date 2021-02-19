import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/all';
import { Link } from 'react-router-dom';
import NavBody from '../Nav/NavBody';
import NavBodyEdu from '../Nav/NavBodyEdu';
import { GiHamburgerMenu } from 'react-icons/gi';

const MobileNav = ({ openMobileNav, onChangeOpenMobileNav }) => {
  const [tab, setTab] = useState(1);
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
            <div className={'lnb__tabs'}>
              <button className={tab === 1 ? 'active' : ''} onClick={() => setTab(1)}>
                <GiHamburgerMenu />
              </button>
              <button className={tab === 2 ? 'active' : ''} onClick={() => setTab(2)}>강의실</button>
            </div>
            {tab === 1 ? <NavBody /> : <NavBodyEdu />}
          </div>
        </nav>
      </>
  );
};

export default MobileNav;
