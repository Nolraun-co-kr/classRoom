import React from 'react';
import NavBlock from './NavBlock';

const lnbData = [
  {
    title: '홈',
    path: '/'
  },
  {
    name: '강좌메뉴',
    depth: [
      {
        path: '/',
        className: 'lnb-1',
        title: '강의계획서'
      },
      {
        path: '/',
        className: 'lnb-2',
        title: '공지사항'
      },
      {
        path: '/',
        className: 'lnb-3',
        title: '강의자료실'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '열린게시판'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '문의게시판'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '강의 및 평가'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '시험 및 설문'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: 'Live 화상강의'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '가상컴퓨터실'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '토론'
      }
    ]
  },
  {
    title: '성적',
    path: '/'
  },
  {
    title: '기채점 및 평가하기',
    path: '/'
  },
  {
    title: '빅데이터 및 통계',
    path: '/'
  },
  {
    title: '강의설정',
    path: '/'
  }
];

const NavBodyEdu = () => {
  return (
    <div>
      {
        lnbData.map((lnb, index) => (
          <NavBlock lnb={lnb} key={index} index={index}/>
        ))
      }
    </div>
  );
};

export default NavBodyEdu;
