import React, { Component } from 'react';

import '../../Style/Medias.css';

class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: this.props.videoList
    };
  }

  render() {

    let videos = [];
    for (let vid in this.state.videoList) {
      videos.push(
        <div className="VideoDiv">
          <h6 style={{"textDecoration":"underline"}}>{this.state.videoList[vid].title}</h6>
          <iframe
            className="VideoFrame"
            title={this.state.videoList[vid].title}
            src={this.state.videoList[vid].source}
            scrolling="no"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

      );
    }

    return (
      <div className="VideosLayout Page">
        {videos}
      </div>
    );
  }
}

export default Videos;
