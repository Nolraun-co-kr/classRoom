import React, { useState, useCallback, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

const Index = ({ vdata, setVdata }) => {
  const [showBottomTrack, setShowBottomTrack] = useState(true);
  const [showRightTrack, setShowRightTrack] = useState(true);
  const [trackInfo, setTrackInfo] = useState([]);

  // true(default) === 'light' , false === 'dark'
  const [theme, setTheme] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleToggleShowBottomTrack = useCallback(() => {
    setShowBottomTrack(!showBottomTrack);
  }, [
    showBottomTrack
  ]);

  const handleToggleShowRightTrack = useCallback(() => {
    setShowRightTrack(!showRightTrack);
  }, [
    showRightTrack
  ]);

  const handleChangeTheme = useCallback(() => {
    setTheme(!theme);
  }, [
    theme
  ]);

  const handleChangeTimer = useCallback((currentTime) => {
    const section = vdata.section.map(sec => {
      return ({
        ...sec,
        active: sec.startTime <= currentTime && currentTime < sec.endTime
      });
    });

    setVdata({
      ...vdata,
      section
    });
  }, [vdata]);

  useEffect(() => {
    fetch('http://nolraun.co.kr/track')
      .then(result => {
        return result.json();
      })
      .then(body => {
        setTrackInfo(body.cues);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(true);
      });
  }, []);

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
        type: 'video/mp4',
        label: '720P'
      },
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
        label: '480P',
        selected: true
      },
      {
        src: '//vjs.zencdn.net/v/oceans.mp4',
        type: 'video/mp4',
        label: '360P'
      }
    ],
    html5: {
      hls: {
        overrideNative: true
      }
    },
    controlBar: {
      playToggle: true,
      pictureInPictureToggle: true,
      remainingTimeDisplay: true,
      progressControl: true,
      ChaptersButton: false,
      volumePanel: {
        inline: false,
        vertical: true
      }
    },
    trackSource: '/assets/track/example.vtt',
    showBottomTrack: showBottomTrack,
    onToggleShowBottomTrack: handleToggleShowBottomTrack,
    showRightTrack: showRightTrack,
    onToggleShowRightTrack: handleToggleShowRightTrack,
    trackInfo: trackInfo,
    handleChangeTheme: handleChangeTheme,
    handleChangeTimer
  };

  return (
    <div className={`playerWrapper ${theme ? '' : 'dark'}`}>
      {loading && (
        <VideoPlayer {...videoJsOptions} />
      )}
    </div>
  );
};

export default Index;
