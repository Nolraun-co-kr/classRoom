import React from 'react';

const scheduleData = [
  {
    id: 1,
    week: 1,
    achievement: 100,
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
    data10: '5/5'
  },
  {
    id: 2,
    week: 2,
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
    data10: '-'
  },
  {
    id: 3,
    week: 3,
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
    data10: '5/5'
  },
  {
    id: 4,
    week: 4,
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
    data10: '-'
  },
  {
    id: 5,
    week: 5,
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
    data10: '5/5'
  },
  {
    id: 6,
    week: 6,
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
    data10: '-'
  },
  {
    id: 7,
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
    data10: '5/5'
  },
  {
    id: 8,
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
    data10: '-'
  }, {
    id: 9,
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
    data10: '5/5'
  },
  {
    id: 10,
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
    data10: '-'
  },
  {
    id: 11,
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
    data10: '5/5'
  },
  {
    id: 12,
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
    data10: '-'
  },
  {
    id: 13,
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
    data10: '5/5'
  },
  {
    id: 14,
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
    data10: '-'
  },
  {
    id: 15,
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
    data10: '5/5'
  },
  {
    id: 16,
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
    data10: '-'
  }
];

const Schedule = ({ hiddenHeader }) => {
  return (
    <div className="schedule">
      {!hiddenHeader && (
        <div className="schedule__header">
          <h3>문화관광론</h3>
          <div>
            <span>2분반</span>
            <span>3학점</span>
          </div>
          <p>하미영 교수</p>
        </div>
      )}
        <div className="schedule__content">
          <div className="schedule__col">
            <div className={'cell col__title'}>
              <span className={'name'}>
                강의<br/>목차
              </span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>동영상</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>실시간수업</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>교안</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>자료</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>댓글과 질문</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>실습</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>퀴즈</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>과제</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>토론</span>
            </div>
            <div className={'cell'}>
              <span className={'state'}>시험</span>
            </div>
          </div>
          {
            scheduleData.map(data => {
              let achieve = '_warning';
              if (data.achievement > 99) {
                achieve = '_complete';
              } else if (data.achievement > 50) {
                achieve = '_obey';
              }

              return (
                <div className="schedule__col" key={data.id}>
                  <div className={'cell col__title'}>
                    <div className={`schedule__type ${data.achievement ? achieve : ''}`}>
                      <span>{data.title}</span>
                      <div>
                        <img src={`/assets/images/schedule-${data.type}.png`} alt=""/>
                        <p>{data.week}주차</p>
                      </div>
                      {
                        data.achievement && (
                          <div className={'achievement'}>
                            <div className={'achievement__bg'} style={{ height: `${data.achievement}%` }} />
                            <p>{data.achievement}%</p>
                          </div>
                        )
                      }
                    </div>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data1}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data2}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data3}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data4}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data5}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data6}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data7}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data8}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data9}</span>
                  </div>
                  <div className={'cell'}>
                    <span className={'state text-center'}>{data.data10}</span>
                  </div>
                </div>
              );
            })
          }
        </div>
    </div>
  );
};

export default Schedule;
