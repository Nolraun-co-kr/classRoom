import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBlock = ({ lnb }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={'lnb__block'}>
      {/* eslint-disable-next-line multiline-ternary */}
      {lnb.title ? (
          <Link className={'lnb__block-title'} to={lnb.path}>
            {lnb.title}
          </Link>
      ) : (
        <>
          <button
            className={`lnb__block-name ${toggle ? 'active' : ''}`}
            onClick={() => setToggle(!toggle)}
          >{lnb.name}</button>
          {toggle && (
            <div className={'lnb__block-depth'}>
              {lnb.depth.map((link, index) => (
                <Link key={index} to={link.path} className={link.className}>
                  {link.title}
                </Link>
              ))}
            </div>
          )}
        </>
      )}

    </div>
  );
};

export default NavBlock;
