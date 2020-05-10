import React, { Component } from "react";

import Carousel from "./MediaComp/Carousel";
import Teaser from "./MediaComp/Teaser";

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
      case "carousel":
        media = <Carousel infos={this.props.media[type]}/>;
        break;
      case "teaser":
        media = <Teaser infos={this.props.media[type]}/>;
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
