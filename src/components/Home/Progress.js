import React from 'react';

const Progress = ({ percent }) => {
  return (
    <div className={'_progress'}>
      <span className={'progress__number'}>
        {percent}%
      </span>
      <div className={'progress__bar'}>
        <i style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

export default Progress;
