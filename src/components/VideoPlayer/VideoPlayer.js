// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';

export default class VideoPlayer extends React.Component {
  componentDidMount () {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady () {
      console.log('onPlayerReady', this);
    });
  }

  componentWillUnmount () {
    if (this.player) {
      this.player.dispose();
    }
  }

  render () {
    return (
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className="video-js" />
      </div>
    );
  }
}
