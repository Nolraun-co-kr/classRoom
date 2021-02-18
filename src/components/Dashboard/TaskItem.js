import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

// 시간을 받아와서 해야 할 일의 시간 포맷에 맞게 세팅함
function getTaskTime (date) {
  let hour = parseInt(dayjs(date).format('HH'), 10);
  let ampm = '오전';
  if (hour > 12) {
    ampm = '오후';
    hour = -12;
  }
  if (parseInt(hour, 10) < 10) {
    hour = '0' + hour;
  }
  return [
    dayjs(date).format('YYYY.MM.DD'),
    `${ampm} ${hour} ${dayjs(date).format('mm')}`
  ];
}

const TaskItem = ({ data }) => {
  return (
    <div className={'box__taskItem'} key={data.id}>
      <div className={'box__taskItem-info'}>
        <div>
          <i className={'type'}>{data.type}</i>
          {
            data.title && (
              <h3>{data.title}</h3>
            )
          }
          <span>{data.star}점</span>
        </div>
        <p>
          {getTaskTime(data.date)[0]}
          <span>{getTaskTime(data.date)[1]}</span>
        </p>
      </div>
      <Link to={''} className={'link'}>바로가기</Link>
    </div>
  );
};

export default TaskItem;
