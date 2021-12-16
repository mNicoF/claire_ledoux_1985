import React from "react";

import Carousel from "./MediaComp/Carousel";
import Teaser from "./MediaComp/Teaser";

const Media = (props) => {
  
  const [type] = React.useState(props.media.type);

  const setMedia = () => {
    let media = <></>;
    switch (type) {
      case "carousel":
        media = <Carousel infos={props.media[type]}/>;
        break;
      case "teaser":
        media = <Teaser infos={props.media[type]}/>;
        break;
      default:
        break;
    }
    return media;
  }

  const myMedia = setMedia();

  return <div className="MediaLayout">{myMedia}</div>;

}

export default Media;
