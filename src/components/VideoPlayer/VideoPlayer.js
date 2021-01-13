// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import TrackRow from './TrackRow';
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

      // sub Toggle track
      const subTrackButton = this.controlBar.addChild('button', {});
      subTrackButton.addClass('vjs-button-icon-subtitles');
      subTrackButton.on('click', function (e) {
        _this.props.onToggleShowBottomTrack();
        const track = this.player_.textTracks_.tracks_[0];
        if (_this.props.showBottomTrack) {
          track.mode = 'showing';
        } else {
          track.mode = 'hidden';
        }
      });

      // right toggle track
      const rightTrackButton = this.controlBar.addChild('button', {});
      rightTrackButton.addClass('vjs-button-icon-right-track');
      rightTrackButton.on('click', function (e) {
        _this.props.onToggleShowRightTrack();
      });
    });

    this.player.on('timeupdate', (e) => {
      const currentTime = _this.player.currentTime();
      this.setState({
        currentTime
      });
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
