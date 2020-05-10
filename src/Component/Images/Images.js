import React, { Component } from 'react';

import '../../Style/Medias.css';

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    let images = [];
    for (let i = 1; i <= this.props.folderSize; i++) {
      images.push(
          <img key={i} src={require('../../medias/galerie/' + this.props.folderName + '/' + i + '.webp')} alt={i} className="ImageImg" />
      );
    }

    return (
      <div className="ImageLayout">
        {images}
      </div>
    );
  }
}

export default Images;
