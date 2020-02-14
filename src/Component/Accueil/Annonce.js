import React, { Component } from 'react';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Annonce extends Component {

  render() {

    let annonceLayoutStyle = {
      "border": "solid #37342F 1px",
      "marginRight": "50px",
      "marginLeft": "50px",
      "position": "relative"
    }

    let annonceContentStyle = {
      "display": "flex",
      "flexDirection": "row",
      "flexWrap": "wrap",
      "justifyContent": "space-around"
    }

    let picStyle = {
      "minHeight": "30vh",
      "maxHeight": "20vw"
    }

    let titleStyle = {
      "marginTop": "20px"
    }

    let textStyle = {
      "maxWidth": "50vh"
    }

    let emphaseStyle = {
      "fontStyle": "italic",
      "fontSize": "1.5vh"
    }

    let closeBtnStyle = {
      "height": "40px",
      "width": "40px",
      "position": "absolute",
      "zIndex":1000,
      "top": 0,
      "right": 0,
      "opacity":0.5
    }

    let handleClose = function() {
      document.getElementById('annonceLayout').style.display = 'none';
    }

    return (
      <div id='annonceLayout' style={annonceLayoutStyle}>
        <Button onClick={() => handleClose()} style={closeBtnStyle} color="danger"><FontAwesomeIcon icon={["fas", "times"]} /></Button>
        <div style={annonceContentStyle}>
          <img src={require('../../medias/accueil/test1.webp')} alt='test1' style={picStyle} />
          <div>
            <h3 style={titleStyle}>Annonce :</h3>
            <p style={textStyle}>
              Bonjour, Recherche de personnes qui serait dans cette situation et qui accepterais d’être modèles.
              N'hésitez pas à prendre contact pour tout renseignement et n'hésitez pas à partager autour de vous !
          </p>
            <p style={emphaseStyle}>Source photos : internet</p>
          </div>
          <img src={require('../../medias/accueil/test2.webp')} alt='test2' style={picStyle} />
        </div>
      </div>
    );
  }
}

export default Annonce;
