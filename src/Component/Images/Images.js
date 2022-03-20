import React, { Fragment } from 'react';
import { Button } from "reactstrap";
import { findOne } from "../../utils/Images";

import '../../Style/Medias.css';

const Images = (props) => {
  
  const [imgIndx, setImgIndx] = React.useState(null);
  const [scrollPos, setScrollPos] = React.useState(0);

  const handleClose = () => {
    window.scrollTo(0, scrollPos);
    setImgIndx(null);
    setScrollPos(0);
  }

  let images = [];
  for (let i = 1; i <= props.folderSize; i++) {
    const image = findOne(props.allImport[props.folderName], i);
    images.push(
      <img key={i} src={image} alt={i} className="ImageImg" />
    );
  }

  return (
    <div className="ImageLayout">
      {imgIndx === null ? (
        <Fragment>
          {images}
        </Fragment>
      ) : (
        <div className="ImgFull">
          <Button id="imgCloseBtn" style={{"display":"block", "marginLeft":"20px", "marginTop":"20px"}} color="danger" onClick={() => handleClose()}>X</Button>
          {images[this.state.imgIndx]}
        </div>
      )}
    </div>
  );
}

export default Images;
