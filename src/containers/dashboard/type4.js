import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import NoticeItem from '../../components/Dashboard/NoticeItem';

import ToggleSchedule from '../../components/Dashboard/ToggleSchedule';
import ScheduleInsert from '../../components/Dashboard/ScheduleInsert';
import DashboardModal from '../../components/Dashboard/DashboardModal';

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
const propScheduleData = [
  {
    id: 1,
    week: 1,
    quick: true,
    achievement: 100,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: null,
    data3: null,
    data4: null,
    data5: null,
    data6: null,
    data7: null,
    data8: null,
    data9: null,
    data10: null,
    time: 35
  },
  {
    id: 2,
    week: 2,
    quick: true,
    achievement: 50,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 35
  },
  {
    id: 3,
    week: 3,
    quick: true,
    achievement: 90,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: '5/5',
    data3: '5/5',
    data4: '5/5',
    data5: '5/5',
    data6: '5/5',
    data7: '5/5',
    data8: '5/5',
    data9: '5/5',
    data10: '5/5',
    time: 35
  },
  {
    id: 4,
    week: 4,
    quick: true,
    achievement: 51,
    title: 'flip',
    type: 'online',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 35
  },
  {
    id: 5,
    week: 5,
    quick: true,
    achievement: 49,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: '5/5',
    data3: '5/5',
    data4: '5/5',
    data5: '5/5',
    data6: '5/5',
    data7: '5/5',
    data8: '5/5',
    data9: '5/5',
    data10: '5/5',
    time: 35
  },
  {
    id: 6,
    week: 6,
    quick: true,
    achievement: 99,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 0
  },
  {
    id: 7,
    quick: true,
    week: 7,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: '5/5',
    data3: '5/5',
    data4: '5/5',
    data5: '5/5',
    data6: '5/5',
    data7: '5/5',
    data8: '5/5',
    data9: '5/5',
    data10: '5/5',
    time: 0
  },
  {
    id: 8,
    quick: true,
    week: 8,
    title: 'test',
    type: 'test',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 0
  }, {
    id: 9,
    quick: true,
    week: 9,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: '5/5',
    data3: '5/5',
    data4: '5/5',
    data5: '5/5',
    data6: '5/5',
    data7: '5/5',
    data8: '5/5',
    data9: '5/5',
    data10: '5/5',
    time: 0
  },
  {
    id: 10,
    quick: true,
    week: 10,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 0
  },
  {
    id: 11,
    quick: true,
    week: 11,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: '5/5',
    data3: '5/5',
    data4: '5/5',
    data5: '5/5',
    data6: '5/5',
    data7: '5/5',
    data8: '5/5',
    data9: '5/5',
    data10: '5/5',
    time: 0
  },
  {
    id: 12,
    quick: true,
    week: 12,
    title: 'flip',
    type: 'online',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 0
  },
  {
    id: 13,
    quick: true,
    week: 13,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: '5/5',
    data3: '5/5',
    data4: '5/5',
    data5: '5/5',
    data6: '5/5',
    data7: '5/5',
    data8: '5/5',
    data9: '5/5',
    data10: '5/5',
    time: 0
  },
  {
    id: 14,
    quick: true,
    week: 14,
    title: 'offline',
    type: 'offline',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 0
  },
  {
    id: 15,
    quick: true,
    week: 15,
    title: 'online',
    type: 'online',
    data1: '5/5',
    data2: '5/5',
    data3: '5/5',
    data4: '5/5',
    data5: '5/5',
    data6: '5/5',
    data7: '5/5',
    data8: '5/5',
    data9: '5/5',
    data10: '5/5',
    time: 0
  },
  {
    id: 16,
    quick: true,
    week: 16,
    title: 'test',
    type: 'test',
    data1: '5/5',
    data2: '5/5',
    data3: '-',
    data4: '-',
    data5: '-',
    data6: '-',
    data7: '-',
    data8: '-',
    data9: '-',
    data10: '-',
    time: 0
  }
];

const Dashboard = () => {
  const [showMaster, setShowMaster] = useState(false);
  const [scheduleData] = useState([
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

  const handleClickToggleMaster = useCallback(() => {
    setShowMaster(!showMaster);
  }, [showMaster]);

  return (
    <>
      <div className={'dashboard'}>
      <div className={'dashboard__block'}>
        <div className={'dashboard__block-header'}>
          <h2>운영중인 강좌</h2>
          <button onClick={handleClickToggleMaster}>+ 새 마스터 피스 강좌운영 규칙 추가하기</button>
        </div>
        <div className={'dashboard__schedule has-header'}>
          <div className="schedule__tabs">
            <button className={'active'}>퀵 수정</button>
            <button>
              주차별<br/>
              세부구성 보기
            </button>
          </div>
          <div className={'allSchedule'}>
            {
              scheduleData.map((schedule, index) => {
                return <ScheduleInsert key={schedule.id} index={index} id={schedule.id} propScheduleData={propScheduleData} />;
              })
            }
          </div>
        </div>
      </div>

      <div className={'dashboard__block'}>
        <div className={'dashboard__block-header'}>
          <h2>학습중인 강좌</h2>
        </div>
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
            {
              scheduleData.map((schedule, index) => {
                return <ToggleSchedule key={schedule.id} index={index} id={schedule.id} />;
              })
            }
          </div>
        </div>
      </div>

      <div className="dashboard__block">
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
    </div>
      {
        showMaster && (
          <DashboardModal
            title={'새 마스터피스 강좌운영 규칙 추가하기'}
            maxWidth={'750'}
            onClickClose={handleClickToggleMaster}
            /* eslint-disable-next-line react/no-children-prop */
            children={(
              <>
                <div className="_modal__block">
                  <div className="_modal__block-body">
                    <div className="flex">
                      <div className="input">
                        <input type="text" placeholder={'새로운 마스터 피스 명을 입력하세요.'}/>
                      </div>
                      <button className={'_btn'}>불러오기</button>
                    </div>
                  </div>
                </div>

                <div className="_modal__block _modal__block--has-header">
                  <div className="_modal__block-header">
                    <h2>묶을 강좌를 선택해주세요.</h2>
                  </div>
                  <div className="_modal__block-body">
                    <label className={'custom-checkbox'} htmlFor={'ck1'}>
                      <input type="checkbox" id={'ck1'} />
                      <span />
                      <p>문화관광론 2분반</p>
                    </label>
                    <label className={'custom-checkbox'} htmlFor={'ck2'}>
                      <input type="checkbox" id={'ck2'} />
                      <span />
                      <p>관광론 1분반</p>
                    </label>
                    <label className={'custom-checkbox'} htmlFor={'ck3'}>
                      <input type="checkbox" id={'ck3'} />
                      <span />
                      <p>관광학 2분반</p>
                    </label>
                  </div>
                </div>
              </>
            )}
          />
        )
      }

    </>
  );
};

export default Dashboard;
