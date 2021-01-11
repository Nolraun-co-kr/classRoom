import React from 'react';
import NavBlock from './NavBlock';

const lnbData = [
  {
    name: 'My Dashboard',
    depth: [
      {
        path: '/',
        className: 'lnb-1',
        title: '홈'
      },
      {
        path: '/',
        className: 'lnb-2',
        title: '공개 강좌 라이브러리'
      },
      {
        path: '/',
        className: 'lnb-3',
        title: '공개 LAB 라이브러리'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '공개 데이터셋 라이브러리'
      }
    ]
  },
  {
    name: 'Future Education',
    depth: [
      {
        path: '/',
        className: 'lnb-5',
        title: '내 강좌'
      },
      {
        path: '/module',
        className: 'lnb-6',
        title: '내 학습모듈'
      },
      {
        path: '/activity',
        className: 'lnb-7',
        title: '내 학습활동'
      },
      {
        path: '/',
        className: 'lnb-8',
        title: '강좌 마스터피스'
      },
      {
        path: '/',
        className: 'lnb-9',
        title: '강좌 운영관리'
      }
    ]
  },
  {
    name: 'Online LAB',
    depth: [
      {
        path: '/',
        className: 'lnb-10',
        title: '클라우드 LAB 관리'
      },
      {
        path: '/',
        className: 'lnb-11',
        title: '클라우드 저장소 관리'
      },
      {
        path: '/',
        className: 'lnb-12',
        title: '데이터셋 관리'
      }
    ]
  },
  {
    name: 'Communications',
    depth: [
      {
        path: '/',
        className: 'lnb-13',
        title: '그룹'
      },
      {
        path: '/',
        className: 'lnb-18',
        title: '채팅'
      },
      {
        path: '/',
        className: 'lnb-14',
        title: '캘린더'
      }
    ]
  },
  {
    name: 'Admin',
    depth: [
      {
        path: '/',
        className: 'lnb-15',
        title: '강좌관리'
      },
      {
        path: '/',
        className: 'lnb-16',
        title: '사용자관리'
      },
      {
        path: '/',
        className: 'lnb-17',
        title: '자원관리'
      }
    ]
  }
];

const NavBody = () => {
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

export default NavBody;
