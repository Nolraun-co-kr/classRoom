import React from 'react';
import VideoPlayer from './VideoPlayer';

const videoJsOptions = {
  autoplay: false,
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  width: 720,
  height: 300,
  controls: true,
  fluid: true,
  sources: [
    {
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }
  ]
};

const Index = () => {
  return (
    <div>
      <VideoPlayer {...videoJsOptions} />
    </div>
  );
};

export default Index;
