import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowDropRightLine } from 'react-icons/all';

const MobileNavItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobileNav__link-item">
      <button onClick={() => setOpen(!open)}>{data.title}</button>
      <div className={`depth ${open ? 'active' : ''}`}>
        {
          data.list.map(link => (
            <Link to={link.url} key={link.title}>
              {link.title}
              <RiArrowDropRightLine />
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default MobileNavItem;
