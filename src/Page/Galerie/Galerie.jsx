import React, { Component } from 'react';
import { Button } from "reactstrap";

import Photos from "./../../Component/Photos/Photos";

class Galerie extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      photoList: this.props.photoList,
      inGalerie: false,
      target: <Photos folderName="ongles" folderSize={13} />
    };
  }

  handleSelect(target) {
    console.log(target)
    this.setState({
      inGalerie: true,
      target: <Photos folderName={target.name} folderSize={target.size} />
    })
  }

  handleBack() {
    this.setState({
      inGalerie: false
    })
  }

  render() {

    let menuAlbum = [];
    for (let photo in this.state.photoList) {
      menuAlbum.push(
        <div className="GalerieDiv" >
          <h6 style={{ "textDecoration": "underline" }}>{this.state.photoList[photo].name}</h6>
          <img
            className="isBtn GalerieImg"
            src={require('../../medias/galerie/' + this.state.photoList[photo].name + '/' + this.state.photoList[photo].size + '.webp')}
            alt={photo}
            onClick={() => this.handleSelect(this.state.photoList[photo])}
          />
        </div>
      );
    }

    return (
      <div className="GalerieLayout Page">

        {this.state.inGalerie ? (
          <React.Fragment>
            <Button style={{"marginLeft":"20px", "backgroundColor":"#37342F"}} onClick={() => this.handleBack()}>{'< Retour'}</Button>
            {this.state.target}
          </React.Fragment>
        ) : (
            <React.Fragment>
              {menuAlbum}
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default Galerie;
