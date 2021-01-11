import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/all';

const Pagination = () => {
  return (
    <div className={'video__pagination'}>
      <Link to={'/'} className={'prev'}>
        <IoIosArrowBack />
        <div >
          <span>이전학습</span>
          <p>페이지1: 동영상</p>
        </div>
      </Link>
      <Link to={'/'} className={'next'}>
        <div >
          <span>이전학습</span>
          <p>페이지1: 동영상</p>
        </div>
        <IoIosArrowForward />
      </Link>
    </div>
  );
};

export default Pagination;
