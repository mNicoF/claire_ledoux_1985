import React, { Component } from 'react';

import Photo from './MediaComp/Photo';
import Video from './MediaComp/Video';

class Media extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let myMedia = (this.props.type === "Photo") ? <Photo /> : <Video />;

    return (
      <div className="MediaLayout">
        {myMedia}
      </div>
    );
  }
}

export default Media;
