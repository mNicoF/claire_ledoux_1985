import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.infos.title,
      source: this.props.infos.source
    };
  }

  render() {
    return (
      <div className="VideoLayout">
        <iframe
          title={this.state.title}
          src={this.state.source}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Video;
