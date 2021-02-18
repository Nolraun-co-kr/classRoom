import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
dayjs.locale('ko');

const NoticeItem = ({ data }) => {
  const isNew = (date) => {
    return dayjs(new Date()) < dayjs(date).add(7, 'day');
  };

  return (
    <Link to={''} className={'box__noticeItem'}>
      <h3 className={isNew(data.date) ? 'is_new' : ''}>
        {data.title}
        <span className={'new'}>N</span>
      </h3>
      {data.lecture && (
        <span className={'lecture'}>{data.lecture}</span>
      )}
      <span className={'date'}>{dayjs(data.date).format('YYYY.MM.DD')}</span>
    </Link>
  );
};

export default NoticeItem;
