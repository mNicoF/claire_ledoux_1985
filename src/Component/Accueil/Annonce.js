import React from 'react';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Annonce = (props) => {

  const annonceLayoutStyle = {
    "display": sessionStorage.getItem('displayAnnonce'),
    "border": "solid #37342F 1px",
    "marginRight": "50px",
    "marginLeft": "50px",
    "position": "relative"
  }

  const annonceContentStyle = {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "justifyContent": "space-between" //"space-around"
  }

  const picStyle = {
    "minHeight": "30vh",
    "maxHeight": "15vw"
  }

  const titleStyle = {
    "marginTop": "20px"
  }

  const textStyle = {
    //"maxWidth": "50vh"
  }

  const emphaseStyle = {
    "fontStyle": "italic",
    "fontSize": "1.5vh"
  }

  const closeBtnStyle = {
    "height": "40px",
    "width": "40px",
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "right": 0,
    "opacity": 0.5
  }

  const handleClose = function () {
    document.getElementById('annonceLayout').style.display = 'none';
    sessionStorage.setItem('displayAnnonce', 'none');
  }

  /*
  let img1 = (<img src={require('../../medias/accueil/covid19.webp')} alt='img1' style={picStyle} />);
  */

 let title = (props.lang === 'fr') ? "Message a l'attention des clientes et clients :" : "Important :";
 let text = (props.lang === 'fr') ?
   "Bonjour, je suis actuellement dans l'incapacité de vous recevoir au cabinet pour une durée indéterminée. Je reste néamoins joignable par messages tout les jours de la semaine de 14h à 18h" :
   "For all the customers that had an appointment during the containment period, please be sure to take a new appointment before the 31th of May. Beyond this date, the appointment will have to be paid";
 let emphase = (props.lang === 'fr') ? "Merci de votre compréhension - Claire Ledoux" : "Claire Ledoux";

  return (
    <div id='annonceLayout' style={annonceLayoutStyle}>
      <Button onClick={() => handleClose()} style={closeBtnStyle} color="danger"><FontAwesomeIcon icon={["fas", "times"]} /></Button>
      <div >
        {/*img1*/}
        <div>
          <h3 style={titleStyle}>{title}</h3>
          <p style={textStyle}>{text}</p>
          <p style={emphaseStyle}>{emphase}</p>
        </div>
        {/*img2*/}
      </div>
    </div>
  );
}

export default Annonce;
