import React from "react";

import Annonce from "./../../Component/Accueil/Annonce";
import News from "./../../Component/Accueil/News";
import Media from "./../../Component/Accueil/Media";
import Pres from "./../../Component/Accueil/Pres";
import Contact from "./../../Component/Accueil/Contact";

import "../../Style/Accueil.css";

const Accueil = (props) => {

  const [news] = React.useState(props.accueil.news);
  const [media] = React.useState(props.accueil.media);
  const [presentation] = React.useState(props.presentation);

  //Traitement des données de contact
  const contactList = props.contact;
  let contactAccueil = [];
  for (let c in contactList) {
    if(contactList[c].accueil) {
      contactAccueil.push(contactList[c]);
    }
  }

  return (
    <div className="AccueilLayout Page">
      <Annonce lang={props.lang}/>
      <News lang={props.lang} news={news}/>
      <div className="AccueilCenter">
        <Media media={media} />
        <Pres lang={props.lang} presentation={presentation} />
      </div>
      <hr />
      <Contact contact={contactAccueil} />
    </div>
  );

}

export default Accueil;
