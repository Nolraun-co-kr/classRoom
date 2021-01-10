import React from 'react';
import { Link } from 'react-router-dom';
import NavBody from '../Nav/NavBody';

const Lnb = () => {
  return (
    <div className={'lnb'}>
      <div className={'lnb__header'}>
        <Link to={'/'}>
          <img src="/assets/images/white-logo.png" alt=""/>
        </Link>
      </div>
      <div className={'lnb__body'}>
        <NavBody />
      </div>
    </div>
  );
};

export default Lnb;
