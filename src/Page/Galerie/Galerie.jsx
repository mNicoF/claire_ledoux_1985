import React, { Component } from 'react';

import '../../Style/Galerie.css';

class Galerie extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let images = [];
    for (let i = 1; i <= 35; i++) {
      images.push(
          <img src={require('../../medias/galerie/' + i + '.jpg')} alt={i} className="GaleriePics" />
      );
    }

    return (
      <div className="GalerieLayout Page">
        {images}
      </div>
    );
  }
}

export default Galerie;
