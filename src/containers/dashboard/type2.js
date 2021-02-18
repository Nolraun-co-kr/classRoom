import React from 'react';
import { Link } from 'react-router-dom';
import Schedule from '../../components/Dashboard/Schedule';
import LectureNoticeItem from '../../components/Dashboard/LectureNoticeItem';
import TaskItem from '../../components/Dashboard/TaskItem';

const noticeData = [
  {
    id: 1,
    type: '필독',
    title: '중간고사 관련 공지',
    description: '중간고사 관련 공지입니다. 중간고사는 1월 11일부터 시작하고..',
    date: '2021.01.23'
  },
  {
    id: 2,
    type: '',
    title: '2주차 강의 Q&A 참여 안내',
    description: '학습자 여러분 안녕하세요? 하미영 교수입니다. 이번주 Q&A 는…',
    date: '2021.01.23'
  },
  {
    id: 3,
    type: '필독',
    title: '과제연장안내',
    description: '안녕하세요? 조교입니다. 기존 문화관광론 과제 관련해서 못 내신..',
    date: '2021.01.23'
  },
  {
    id: 4,
    type: '긴급안내',
    title: '2주차는 COVID19로 인하여 온라인 수업전환',
    description: '안녕하세요 조교입니다. 최근 COVID19 3차확산으로 인하여 원래…',
    date: '2021.01.23'
  }
];
const taskData = [
  {
    id: 1,
    type: '중간고사',
    title: '',
    star: 100,
    date: new Date()
  },
  {
    id: 2,
    type: '퀴즈',
    title: '문화와 상식의 차이...',
    star: 3,
    date: new Date()
  },
  {
    id: 3,
    type: '동영상',
    title: '3주차 영상',
    star: 0,
    date: new Date()
  }
];

const Dashboard = () => {
  return (
    <div className={'dashboard'}>
      <div className={'dashboard__notice'}>
        <div className="box">
          <div className="box__header">
            <h2 className={'i-notice'}>강좌 공지사항</h2>
            <Link to={''}>더보기 +</Link>
          </div>
          <div className={'box__body'}>
            <div className="box__noticeList">
              {noticeData.map(data => <LectureNoticeItem key={data.id} data={data} />)}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box__header">
            <h2 className={'i-task'}>해야 할 일</h2>
            <Link to={''}>더보기 +</Link>
          </div>
          <div className={'box__body'}>
            <div className="box__taskList">
              {taskData.map(data => <TaskItem key={data.id} data={data} />)}
            </div>
          </div>
        </div>
      </div>

      <div className={'dashboard__schedule has-header mt-30'}>
        <div className="dashboard__schedule-header">
          <h2 className={'i-schedule'}>진도율&성취율 운영대시보드</h2>
        </div>
        <Schedule hiddenHeader={true} />
      </div>

      <div className={'dashboard__schedule mt-30'}>
        <Schedule />
      </div>
    </div>
  );
};

export default Dashboard;
