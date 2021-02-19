import React from 'react';
import NavBlock from './NavBlock';

const lnbData = [
  {
    name: '주요메뉴',
    depth: [
      {
        path: '/',
        className: 'lnb-1',
        title: '대시보드'
      },
      {
        path: '/',
        className: 'lnb-2',
        title: '내 강좌'
      },
      {
        path: '/',
        className: 'lnb-3',
        title: '그룹'
      },
      {
        path: '/',
        className: 'lnb-4',
        title: '채팅'
      },
      {
        path: '/',
        className: 'lnb-5',
        title: '캘린더'
      }
    ]
  },
  {
    name: '클라우드 실습실',
    depth: [
      {
        path: '/',
        className: 'lnb-6',
        title: '가상 컴퓨터실'
      },
      {
        path: '/',
        className: 'lnb-7',
        title: '클라우드 저장소'
      }
    ]
  },
  {
    name: '라이브러리',
    depth: [
      {
        path: '/',
        className: 'lnb-8',
        title: '공개 강좌(목록/상세)'
      },

      {
        path: '/',
        className: 'lnb-9',
        title: '비정규 강좌(목록/상세)'
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
