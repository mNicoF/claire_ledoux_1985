import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let video = (
      <iframe
        title="Un cabinet de tatouage médical à Niort"
        src="https://www.youtube.com/embed/HFgBaR0D8cM"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );

    return (
      <div className="VideoLayout">
        {video}
      </div>
    );
  }
}

export default Video;
