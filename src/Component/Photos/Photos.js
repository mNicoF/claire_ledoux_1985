import React, { Component } from 'react';

import '../../Style/Medias.css';

class Photos extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    let images = [];
    for (let i = 1; i <= this.props.folderSize; i++) {
      images.push(
          <img src={require('../../medias/galerie/' + this.props.folderName + '/' + i + '.webp')} alt={i} className="PhotoImg" />
      );
    }

    return (
      <div className="PhotoLayout">
        {images}
      </div>
    );
  }
}

export default Photos;
