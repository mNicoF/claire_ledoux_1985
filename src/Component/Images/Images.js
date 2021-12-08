import React, { Component, Fragment } from 'react';
import { Button } from "reactstrap";
import { findOne } from "../../utils/Images";

import '../../Style/Medias.css';

class Images extends Component {
  constructor(props) {
    super(props);

    this.handleClicImg = this.handleClicImg.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      imgIndx: null,
      scrollPos: 0
    };
  }

  handleClicImg(event) {
    let targetAlt = event.target.getAttribute("alt");
    let scrollTop = window.scrollY;
    this.setState({
      imgIndx: targetAlt-1,
      scrollPos: scrollTop
    })
  }

  handleClose() {
    window.scrollTo(0, this.state.scrollPos);
    this.setState({
      imgIndx: null,
      scrollPos: 0
    })
  }

  render() {

    let images = [];
    for (let i = 1; i <= this.props.folderSize; i++) {
      const image = findOne(this.props.allImport[this.props.folderName], i);
      images.push(
        <img key={i} src={image} alt={i} className="ImageImg" />
      );
    }

    return (
      <div className="ImageLayout">
        {this.state.imgIndx === null ? (
          <Fragment>
            {images}
          </Fragment>
        ) : (
          <div className="ImgFull">
            <Button id="imgCloseBtn" style={{"display":"block", "marginLeft":"20px", "marginTop":"20px"}} color="danger" onClick={() => this.handleClose()}>X</Button>
            {images[this.state.imgIndx]}
          </div>
        )}
      </div>
    );
  }
}

export default Images;
