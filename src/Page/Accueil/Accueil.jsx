import React, { Component } from "react";

import News from "./../../Component/Accueil/News";
import Media from "./../../Component/Accueil/Media";
import Pres from "./../../Component/Accueil/Pres";
import Contact from "./../../Component/Accueil/Contact";

import "../../Style/Accueil.css";

class Accueil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: this.props.accueil.news,
      media: this.props.accueil.media,
      presentation: {
        title: this.props.presentation.title,
        content: this.props.presentation.resume
      }
    };
  }

  render() {

    //Traitement des données de contact
    const contactList = this.props.contact;
    let contactAccueil = [];
    for (let c in contactList) {
      if(contactList[c].accueil) {
        contactAccueil.push(contactList[c]);
      }
    }

    return (
      <div className="AccueilLayout Page">
        <News news={this.state.news}/>
        <div className="AccueilCenter">
          <Media media={this.state.media} />
          <Pres presentation={this.state.presentation} />
        </div>
        <hr />
        <Contact contact={contactAccueil} />
      </div>
    );
  }
}

export default Accueil;
