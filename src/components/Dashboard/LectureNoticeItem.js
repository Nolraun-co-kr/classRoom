import React from 'react';
import { Link } from 'react-router-dom';

const LectureNoticeItem = ({ data }) => {
  return (
    <Link to={''} className={'box__lectureNoticeItem'} key={data.id}>
      <h3>
        {data.type && (
          <span>[{data.type}]</span>
        )}
        {data.title}
      </h3>
      <p>{data.description}</p>
      <span className={'date'}>{data.date}</span>
    </Link>
  );
};

export default LectureNoticeItem;
