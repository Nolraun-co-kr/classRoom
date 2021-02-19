import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginBoard = ({
  noticeData,
  newsData
}) => {
  const [tab, setTab] = useState(1);
  return (
    <div className={'LoginBoard'}>
      <div className={'loginBoard__tabs'}>
        <button className={`${tab === 1 ? 'active' : ''}`} onClick={() => setTab(1)}>공지사항</button>
        <button className={`${tab === 2 ? 'active' : ''}`} onClick={() => setTab(2)}>언론보도</button>
        <Link to={''}>+</Link>
      </div>
      <div className={'loginBoard__content'}>
        {
          tab === 1
            // eslint-disable-next-line multiline-ternary
            ? (
                noticeData.map(data => <Link key={data.id} to={''}>{data.title}</Link>)
              ) : (
                newsData.map(data => <Link key={data.id} to={''}>{data.title}</Link>)
              )
        }

      </div>
    </div>
  );
};

export default LoginBoard;
