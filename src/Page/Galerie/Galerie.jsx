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
      prevScroll: 0,
      target: <Photos folderName="ongles" folderSize={13} />
    };
  }

  componentDidMount() {
    window.onscroll = function() {
      let dfltBackBtn = document.getElementById('dfltBackBtn');
      let stkyBackBtn = document.getElementById('stkyBackBtn');
      if(dfltBackBtn){
        if(dfltBackBtn.offsetTop < window.pageYOffset){
          dfltBackBtn.style.display = "hidden";
          stkyBackBtn.style.display = "block";
        } else {
          dfltBackBtn.style.display = "block";
          stkyBackBtn.style.display = "none";
        }
      }
    }
  }

  handleSelect(target) {
    let windowScrollY = window.scrollY;
    window.scrollTo(0, 0);
    this.setState({
      inGalerie: true,
      prevScroll: windowScrollY,
      target: <Photos folderName={target.name} folderSize={target.size} />
    })
  }

  handleBack() {
    window.scrollTo(0, this.state.prevScroll);
    this.setState({
      prevScroll: 0,
      inGalerie: false
    })
  }

  render() {

    let menuAlbum = [];
    for (let photo in this.state.photoList) {
      menuAlbum.push(
        <div className="GalerieDiv" key={photo}>
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
            <Button id="dfltBackBtn" style={{"display":"block", "marginLeft":"20px", "backgroundColor":"#37342F",}} onClick={() => this.handleBack()}>{'< Retour'}</Button>
            <Button id="stkyBackBtn" style={{"display":"none", "marginLeft":"20px", "backgroundColor":"#37342F", "zIndex":100, "position":"fixed", "top":0}} onClick={() => this.handleBack()}>{'< Retour'}</Button>
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
