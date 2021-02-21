import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NoticeItem from '../../components/Dashboard/NoticeItem';
import DragSchedule from '../../components/Dashboard/DragSchedule';

import update from 'immutability-helper';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const lectureNoticeData = [
  {
    id: 1,
    title: '중간고사 관련 공지',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 2,
    title: '2주차 강의 Q&A 참여 안내',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 3,
    title: '과제연장안내',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 4,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    lecture: '영어학개론',
    date: new Date('2021-02-01')
  },
  {
    id: 5,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    lecture: '시사영어',
    date: new Date('2021-02-01')
  }
];
const systemNoticeData = [
  {
    id: 1,
    title: '중간고사 관련 공지1',
    date: new Date()
  },
  {
    id: 2,
    title: '2주차 강의 Q&A 참여 안내',
    date: new Date()
  },
  {
    id: 3,
    title: '과제연장안내',
    date: new Date('2021-02-01')
  },
  {
    id: 4,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    date: new Date('2021-02-01')
  },
  {
    id: 5,
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    date: new Date('2021-02-01')
  }
];

const Dashboard = () => {
  const [scheduleData, setScheduleData] = useState([
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    }
  ]);
  const moveSchedule = (dragIndex, hoverIndex) => {
    const dragCard = scheduleData[dragIndex];
    setScheduleData(update(scheduleData, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard]
      ]
    }));
  };

  return (
    <div className={'dashboard'}>
      <div className={'dashboard__schedule has-header'}>
        <div className="schedule__tabs">
          <button className={'active'}>정규강좌</button>
          <button>
            비정규강좌
            <span>(기간 유)</span>
          </button>
          <button>
            비정규강좌
            <span>(기간 무)</span>
          </button>
          <button>Private</button>
        </div>
        <div className={'schedule__term'}>
          <h3>2021년 1학기 수강기간</h3>
          <p>2021. 01. 27 ~ 2021. 05. 11</p>
        </div>
        <div className={'allSchedule'}>
          <DndProvider backend={HTML5Backend}>
            {
              scheduleData.map((schedule, index) => {
                return <DragSchedule key={schedule.id} index={index} id={schedule.id} moveSchedule={moveSchedule} />;
              })
            }
          </DndProvider>
        </div>
      </div>
      <div className={'dashboard__notice mt-30'}>
        <div className="box">
          <div className="box__header">
            <h2 className={'i-notice'}>강좌 공지사항</h2>
            <Link to={''}>더보기 +</Link>
          </div>
          <div className={'box__body'}>
            <div className="box__noticeList">
              {lectureNoticeData.map(data => <NoticeItem key={data.id} data={data} />)}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box__header">
            <h2 className={'i-system'}>시스템 공지사항</h2>
            <Link to={''}>더보기 +</Link>
          </div>
          <div className={'box__body'}>
            <div className="box__taskList">
              {systemNoticeData.map(data => <NoticeItem key={data.id} data={data} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
