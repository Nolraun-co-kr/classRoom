// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

export default class VideoPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showSubTrack: false,
      trackSource: this.props.trackSource
    };

    this.toggleSubTrack = this.toggleSubTrack.bind(this);
  }

  toggleSubTrack () {
    this.setState({
      showSubTrack: !this.state.showSubTrack
    });
  }

  componentDidMount () {
    const _this = this;
    this.player = videojs(this.videoNode, this.props, function onPlayerReady () {
      const hdButton = this.controlBar.addChild('button', {});
      hdButton.addClass('vjs-button-icon-hd');

      // change Theme
      const themeButton = this.controlBar.addChild('button', {});
      themeButton.addClass('vjs-button-icon-theme');

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
    });

    // right toggle track
    const rightTrackButton = this.player.controlBar.addChild('button', {});
    rightTrackButton.addClass('vjs-button-icon-right-track');
  }

  componentWillUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  }

  render () {
    return (
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className="video-js">

          <track kind="captions" src={this.state.trackSource} srcLang="ko" label="Korean" default />

        </video>
      </div>
    );
  }
}
