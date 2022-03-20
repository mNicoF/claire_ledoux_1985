import React from "react";

const Video = (props) => {
  return (
    <div className="TeaserLayout">
      <iframe
        title={props.infos.title}
        src={props.infos.source}
        scrolling="no"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default Video;