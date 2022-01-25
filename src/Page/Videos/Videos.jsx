import React from 'react';

import '../../Style/Medias.css';

const Videos = (props) => {
  
  const [videoList] = React.useState(props.videoList);

  let videos = [];
  for (let vid in videoList) {
    videos.push(
      <div className="VideoDiv" key={vid}>
        <h6 style={{"textDecoration":"underline"}}>{videoList[vid].title}</h6>
        <iframe
          className="VideoFrame"
          title={videoList[vid].title}
          src={videoList[vid].source}
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

export default Videos;
