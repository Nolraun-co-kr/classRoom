import React from 'react';
import VideoPlayer from '../VideoPlayer';

const Preview = () => {
  return (
    <div className={'preview'}>
      <div className={'preview__info'}>
        안내) 미리보기에서는 20초 까지만 볼 수 있습니다
      </div>
      <div className={'videoLayout'}>
        <VideoPlayer limitTime={20} />
      </div>
    </div>
  );
};

export default Preview;
