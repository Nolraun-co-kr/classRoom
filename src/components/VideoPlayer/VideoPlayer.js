// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import TrackRow from './TrackRow';
import 'videojs-landscape-fullscreen';
require('videojs-offset');

require('@silvermine/videojs-quality-selector')(videojs);

export default class VideoPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      player: null,
      showSubTrack: false,
      trackSource: this.props.trackSource,
      trackInfo: this.props.trackInfo,
      currentTime: 0
    };

    this.toggleSubTrack = this.toggleSubTrack.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
  }

  toggleSubTrack () {
    this.setState({
      showSubTrack: !this.state.showSubTrack
    });
  }

  setCurrentTime (time) {
    console.log(time);
    this.state.player.currentTime(time);
  }

  componentDidMount () {
    const _this = this;

    this.player = videojs(this.videoNode, this.props, function onPlayerReady () {
      // quality
      const hdButton = this.controlBar.addChild('QualitySelector');
      hdButton.addClass('vjs-button-icon-hd');

      // change Theme
      const themeButton = this.controlBar.addChild('button', {});
      themeButton.addClass('vjs-button-icon-theme');
      themeButton.on('click', function () {
        _this.props.handleChangeTheme();
      });
      themeButton.on('touchend', function () {
        _this.props.handleChangeTheme();
      });

      // sub Toggle track
      const subTrackButton = this.controlBar.addChild('button', {});
      const subTrackFunc = () => {
        _this.props.onToggleShowBottomTrack();
        const track = this.player_.textTracks_.tracks_[0];
        if (_this.props.showBottomTrack) {
          track.mode = 'showing';
        } else {
          track.mode = 'hidden';
        }
      };
      subTrackButton.addClass('vjs-button-icon-subtitles');
      subTrackButton.on('click', function (e) {
        subTrackFunc();
      });
      subTrackButton.on('touchend', function (e) {
        subTrackFunc();
      });

      // right toggle track
      const rightTrackButton = this.controlBar.addChild('button', {});
      rightTrackButton.addClass('vjs-button-icon-right-track');
      rightTrackButton.on('click', function (e) {
        _this.props.onToggleShowRightTrack();
      });
      rightTrackButton.on('touchend', function (e) {
        _this.props.onToggleShowRightTrack();
      });
    });

    document.addEventListener('click', (e) => {
      if (this.props.vdata && e.target.classList.contains('trackText')) {
        console.log(e.target.dataset.start);
        this.setCurrentTime(parseFloat(e.target.dataset.start, 10));
      }
    });

    if (this.props.limitTime) {
      this.player.offset({
        start: 0,
        end: this.props.limitTime,
        restart_beginning: false
      });
    }

    this.player.landscapeFullscreen({
      fullscreen: {
        enterOnRotate: true,
        alwaysInLandscapeMode: true,
        iOS: true
      }
    });

    this.player.on('play', (e) => {
      const playBtn = document.querySelector('.play-control');
      if (playBtn) {
        playBtn.classList.add('play');
      }
    });

    this.player.on('timeupdate', (e) => {
      const currentTime = _this.player.currentTime();

      this.props.handleChangeTimer(currentTime);

      this.setState({
        currentTime
      });

      const current = document.querySelector('.detailLayout3__progress .current');
      if (current) {
        // 타이머 업데이트
        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = Math.floor(currentTime - currentMinutes * 60);

        current.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;

        // 프로그래스 바 업데이트
        const time = this.player.cache_.duration;
        const timePercent = currentTime / time * 100;
        const progressBar = document.querySelector('.detailLayout3__progress .inner_progress-bar');
        progressBar.style.width = `${timePercent}%`;
      }
    });

    this.player.on('pause', (e) => {
      const playBtn = document.querySelector('.play-control');
      if (playBtn) {
        playBtn.classList.remove('play');
      }
    });

    this.player.on('fullscreenchange', () => {
      if (this.player.isFullscreen()) {
        _this.props.onToggleShowRightTrack(false);
        document.querySelector('.vjs-control-bar').classList.add('visible');
      } else {
        document.querySelector('.vjs-control-bar').classList.remove('visible');
      }
    });

    this.player.on('loadedmetadata', (e) => {
      const playBtn = document.querySelector('.play-control');
      const duration = document.querySelector('.detailLayout3__progress .duration');
      const progress = document.querySelector('.detailLayout3__progress .inner_progress');
      if (duration) {
        const time = this.player.cache_.duration;
        const durationMinutes = Math.floor(time / 60);
        const durationSeconds = Math.floor(time - durationMinutes * 60);

        duration.innerHTML = `${durationMinutes}:${durationSeconds}`;

        playBtn.addEventListener('click', (e) => {
          // 재생중인지 체크
          e.stopPropagation();
          const isPlaying = playBtn.classList.contains('play');
          if (isPlaying) {
            this.player.pause();
          } else {
            this.player.play();
          }
        });

        progress.addEventListener('click', (e) => {
          const outerWidth = progress.offsetWidth;
          const percent = e.clientX / outerWidth * 100;
          const time = this.player.cache_.duration;

          const targetTime = percent * time / 100;
          this.player.currentTime(targetTime);
        });
      }
    });

    this.setState({
      player: this.player
    });
  }

  componentWillUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  }

  render () {
    return (
      <div className={`playerLayout ${this.props.showRightTrack ? 'showRightTrack' : ''}`}>
        <div className={'videobox'}>
          <div data-vjs-player>
            <video ref={node => (this.videoNode = node)} className="video-js">
              <track kind="captions" src={this.state.trackSource} srcLang="ko" label="Korean" default />
            </video>
          </div>
        </div>

        {this.props.showRightTrack && (
          <div className={'trackLayout'}>
            {this.state.trackInfo.map((track, index) => {
              return (
                  <TrackRow
                    key={index}
                    start={track.start}
                    end={track.end}
                    text={track.text}
                    currentTime={this.state.currentTime}
                    setCurrentTime={this.setCurrentTime}
                  />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
