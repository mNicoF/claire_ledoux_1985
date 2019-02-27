import React, { Component } from "react";

import News from "./../../Component/Accueil/News";
import Media from "./../../Component/Accueil/Media";
import Pres from "./../../Component/Accueil/Pres";
import Contact from "./../../Component/Accueil/Contact";

import "../../Style/Accueil.css";

class Accueil extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    /*
    let unused = (
      <div className="AccueilLayout Page">
        <div className="AccueilH3">Bienvenue</div>
        <div>Le cabinet de dermographie vous attend !</div>
        <div>Suivez toutes les informations sur Facebook : </div>
        <div style={{ margin: "20px" }}>
          <a
            className="AccueilBtn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/claireledoux1985/"
          >
            @claireledoux1985
          </a>
        </div>
        <div className="AccueilDev">
          - Ce site est toujours en cours de développement -
        </div>
      </div>
    );
    */

    return (
      <div className="AccueilLayout Page">
        <News />
        <div className="AccueilCenter">
          <Media type={"Video"} />
          <Pres />
        </div>
        <Contact />
      </div>
    );
  }
}

export default Accueil;
