import React, { useState, useCallback } from 'react';
import VideoPlayer from './VideoPlayer';

const Index = () => {
  const [showBottomTrack, setShowBottomTrack] = useState(true);

  const handleToggleShowBottomTrack = useCallback(() => {
    setShowBottomTrack(!showBottomTrack);
  }, [
    showBottomTrack
  ]);

  const videoJsOptions = {
    autoplay: false,
    playsinline: false,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    width: 720,
    height: 300,
    controls: true,
    fluid: true,
    muted: false,
    sources: [
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4'
      }
    ],
    controlBar: {
      playToggle: true,
      pictureInPictureToggle: true,
      remainingTimeDisplay: true,
      progressControl: true,
      ChaptersButton: true,
      volumePanel: {
        inline: false,
        vertical: true
      }
    },
    trackSource: '/assets/track/example.vtt',
    showBottomTrack: showBottomTrack,
    onToggleShowBottomTrack: handleToggleShowBottomTrack
  };

  return (
    <div className={'playerWrapper'}>
      <VideoPlayer {...videoJsOptions} />
    </div>
  );
};

export default Index;
