import React from 'react';
import YouTube from 'react-youtube';

class HomeVideo extends React.Component {
  render() {
    const opts = {
      height: '450',
      width: '700',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0

      }
    };

    var playerStyle = {
        // marginTop: '10px',
        marginBottom: '10px',
        textAlign: 'right',

    }

    return (
      <div style={playerStyle}>
      <YouTube
        videoId="p1LFOqLyo2o"
        opts={opts}
        onReady={this._onReady}
      />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default HomeVideo;
