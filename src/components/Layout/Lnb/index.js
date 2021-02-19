import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBody from '../Nav/NavBody';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavBodyEdu from '../Nav/NavBodyEdu';

const Lnb = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className={'lnb'}>
      <div className={'lnb__header'}>
        <Link to={'/'}>
          <img src="/assets/images/sy-logo.png" alt=""/>
        </Link>
      </div>

      <div className={'lnb__body'}>
        <div className={'lnb__tabs'}>
          <button className={tab === 1 ? 'active' : ''} onClick={() => setTab(1)}>
            <GiHamburgerMenu />
          </button>
          <button className={tab === 2 ? 'active' : ''} onClick={() => setTab(2)}>강의실</button>
        </div>
        {tab === 1 ? <NavBody /> : <NavBodyEdu />}
      </div>
    </div>
  );
};

export default Lnb;
