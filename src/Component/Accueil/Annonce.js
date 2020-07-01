import React, { Component } from 'react';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Annonce extends Component {

  render() {

    let annonceLayoutStyle = {
      "display": sessionStorage.getItem('displayAnnonce'),
      "border": "solid #37342F 1px",
      "marginRight": "50px",
      "marginLeft": "50px",
      "position": "relative"
    }

    let annonceContentStyle = {
      "display": "flex",
      "flexDirection": "row",
      "flexWrap": "wrap",
      "justifyContent": "space-between" //"space-around"
    }

    let picStyle = {
      "minHeight": "30vh",
      "maxHeight": "15vw"
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
      "zIndex": 1,
      "top": 0,
      "right": 0,
      "opacity": 0.5
    }

    let handleClose = function () {
      document.getElementById('annonceLayout').style.display = 'none';
      sessionStorage.setItem('displayAnnonce', 'none');
    }

    /*
    let title = (this.props.lang === 'fr') ? "Annonce :" : "Advert :";
    let text = (this.props.lang === 'fr') ?
      "Bonjour, Recherche de personnes qui seraient dans cette situation et qui accepteraient d’être modèles. N'hésitez pas à prendre contact pour tout renseignements et n'hésitez pas à partager autour de vous !" :
      "Hello, Looking for people in those situation and willing to be a model. Do not hesitate to contact me for any information and do not hesitate to share around you !";
    let emphase = (this.props.lang === 'fr') ? "Source photos : internet" : "Pictures source : internet";
    let img1 = (<img src={require('../../medias/accueil/img1.webp')} alt='img1' style={picStyle} />);
    let img2 = (<img src={require('../../medias/accueil/img2.webp')} alt='img2' style={picStyle} />);
    */

    /*
    let title = (this.props.lang === 'fr') ? "Annonce :" : "Advert :";
    let text = (this.props.lang === 'fr') ?
      "Pour tous les clients qui avaient un rendez-vous de retouche prévu pendant la période du confinement, merci de reprendre rendez-vous avant le 31 mai. Au delà de cette date le rendez-vous devra être réglé" :
      "For all the customers that had an appointment during the containment period, please be sure to take a new appointment before the 31th of May. Beyond this date, the appointment will have to be paid";
    let emphase = (this.props.lang === 'fr') ? "Source photos : internet" : "Pictures source : internet";
    let img1 = (<img src={require('../../medias/accueil/covid19.webp')} alt='img1' style={picStyle} />);
    let img2 = (<div></div>);
    */

    return (
      <div id='annonceLayout' style={annonceLayoutStyle}>
        <Button onClick={() => handleClose()} style={closeBtnStyle} color="danger"><FontAwesomeIcon icon={["fas", "times"]} /></Button>
        <div style={annonceContentStyle}>
          {img1}
          <div>
            <h3 style={titleStyle}>{title}</h3>
            <p style={textStyle}>{text}</p>
            <p style={emphaseStyle}>{emphase}</p>
          </div>
          {img2}
        </div>
      </div>
    );
  }
}

export default Annonce;
