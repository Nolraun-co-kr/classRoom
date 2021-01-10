import React from 'react';
import { Link } from 'react-router-dom';

const BreadCrumb = () => {
  return (
    <div className={'_breadcrumb'}>
      <Link to={'/'}>
        <img src="/assets/images/bread-home.png" alt=""/>
      </Link>
      <Link to={'/'}>미래교육</Link>
      <Link to={'/'}>내 강좌</Link>
    </div>
  );
};

export default BreadCrumb;
