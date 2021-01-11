import React, { useState } from 'react';
import CourseDetailHeader from '../../components/CourseDetail/CourseDetailHeader';
import Contents from '../../components/Contents';
import useWindowDimensions from '../../hooks/useWindowDemensions';
import CourseDetailInfoItems from '../../components/CourseDetail/CourseDetailInfoItems';
import CourseDetailInformation from '../../components/CourseDetail/CourseDetailInformation';
import Communication from '../../components/Communication';

const MyCourseDetail = ({ theme }) => {
  const [tab, setTab] = useState(1);
  const { width } = useWindowDimensions();
  return (
    <div className={'courseDetail'}>
      <CourseDetailHeader theme={theme} />
      {width < 768 && (
        <CourseDetailInfoItems/>
      )}

      <div className={'courseDetail__body'}>
        <div className="_tabs">
          <button onClick={() => setTab(1)} className={tab === 1 && 'active'}>상세정보</button>
          <button onClick={() => setTab(2)} className={tab === 2 && 'active'}>강의목차</button>
          <button onClick={() => setTab(3)} className={tab === 3 && 'active'}>커뮤니케이션</button>
        </div>

        <div className="courseDetail__views">
          {
            tab === 1 && <CourseDetailInformation />
          }
          {
            tab === 2 && <Contents theme={theme}/>
          }
          {
            tab === 3 && <Communication />
          }
        </div>
      </div>
    </div>
  );
};

export default MyCourseDetail;
