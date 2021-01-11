import React from 'react';
import CourseDetailInfoItems from './CourseDetailInfoItems';

const CourseDetailHeader = ({ theme }) => {
  return (
    <div className="courseDetail__header">
      <div className={'thumb'}>
        <img src="//via.placeholder.com/260x260" alt=""/>
      </div>
      <div className="info">
        <h2 className={'info__title'}>
          CNC/레이저커터를 활용한 아크릴 조명 만들기 클래스
        </h2>
        <span className={'info__tags'}>
          #장비교육, #레이저커터, #아크릴조명
        </span>
        <CourseDetailInfoItems theme={theme} />
      </div>
    </div>
  );
};

export default CourseDetailHeader;
