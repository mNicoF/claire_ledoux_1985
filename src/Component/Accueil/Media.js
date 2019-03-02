import React, { Component } from "react";

import Photo from "./MediaComp/Photo";
import Video from "./MediaComp/Video";

class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: this.props.media.type
    };
  }

  setMedia() {
    let media = <></>;
    let type = this.state.type;
    switch (type) {
      case "photo":
        media = <Photo infos={this.props.media[type]}/>;
        break;
      case "video":
        media = <Video infos={this.props.media[type]}/>;
        break;
      default:
        break;
    }
    return media;
  }

  render() {
    let myMedia = this.setMedia();

    return <div className="MediaLayout">{myMedia}</div>;
  }
}

export default Media;
