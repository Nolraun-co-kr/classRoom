import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const NoticeItem = ({ data }) => {
  return (
    // check 클래스가 추가되면 앞에 점이 붙습니다.
    <Link to={''} className={'notice__item check'}>
      <div className={'notice__item-info'}>
        <div className="thumb">
          <img src="/assets/images/notice-user-dummy.png" alt=""/>
        </div>
        <div className={'info'}>
          <h3>
            {data.title}
            <span>{data.section}</span>
          </h3>
          <p>
            {data.description}
          </p>
        </div>
      </div>
      <span className={'notice__item-date'}>{dayjs(data.date).format('YYYY-MM-DD HH:mm')}</span>
    </Link>
  );
};

export default NoticeItem;
