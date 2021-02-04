import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBody from '../Nav/NavBody';
import { CgMenuGridR } from 'react-icons/cg';
import NavBodyEdu from '../Nav/NavBodyEdu';

const Lnb = () => {
  const [tab, setTab] = useState(1);
  return (
    <div className={'lnb'}>
      <div className={'lnb__header'}>
        <Link to={'/'}>
          <img src="/assets/images/white-logo.png" alt=""/>
        </Link>
      </div>

      <div className={'lnb__body'}>
        <div className={'lnb__tabs'}>
          <button className={tab === 1 ? 'active' : ''} onClick={() => setTab(1)}>
            <CgMenuGridR />
          </button>
          <button className={tab === 2 ? 'active' : ''} onClick={() => setTab(2)}>강좌</button>
        </div>
        {tab === 1 ? <NavBody /> : <NavBodyEdu />}
      </div>
    </div>
  );
};

export default Lnb;
