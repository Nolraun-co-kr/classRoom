import React from 'react';
import NavBlock from './NavBlock';

const lnbData = [
  {
    name: '주요메뉴',
    depth: [
      {
        path: '/',
        className: 'lnb-lecture-1',
        title: '홈'
      },
      {
        path: '/',
        className: 'lnb-lecture-2',
        title: '공지사항'
      },
      {
        path: '/',
        className: 'lnb-lecture-3',
        title: '강의계획서'
      },
      {
        path: '/',
        className: 'lnb-lecture-4',
        title: '출결/학습현황'
      },
      {
        path: '/',
        className: 'lnb-lecture-5',
        title: '성적'
      }
    ]
  },
  {
    name: '출결/학습',
    depth: [
      {
        path: '/',
        className: 'lnb-lecture-6',
        title: '동영상'
      },
      {
        path: '/',
        className: 'lnb-lecture-7',
        title: '실시간수업'
      },
      {
        path: '/',
        className: 'lnb-lecture-8',
        title: '교안자료'
      },
      {
        path: '/',
        className: 'lnb-lecture-9',
        title: '기타자료'
      },
      {
        path: '/',
        className: 'lnb-lecture-10',
        title: '댓글과질문'
      }
    ]
  },
  {
    name: '풀이/평가',
    depth: [
      {
        path: '/',
        className: 'lnb-lecture-11',
        title: '실습'
      },
      {
        path: '/',
        className: 'lnb-lecture-12',
        title: '퀴즈'
      },
      {
        path: '/',
        className: 'lnb-lecture-13',
        title: '과제 및 평가'
      },
      {
        path: '/',
        className: 'lnb-lecture-14',
        title: '토론'
      },
      {
        path: '/',
        className: 'lnb-lecture-15',
        title: '설문'
      },
      {
        path: '/',
        className: 'lnb-lecture-4',
        title: '시험'
      }
    ]
  }
];

const NavBodyEdu = () => {
  return (
    <div>
      <div className="lectureSelector">
        <select name="" id="" className={''}>
          <option value="">문화관광론</option>
        </select>
      </div>
      {
        lnbData.map((lnb, index) => (
          <NavBlock lnb={lnb} key={lnb.name} index={index}/>
        ))
      }
    </div>
  );
};

export default NavBodyEdu;
