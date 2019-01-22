import React, { Component } from 'react';

import '../../Style/Accueil.css';

class Accueil extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  render() {

    // let height = (window.innerHeight - 230) + "px";
    // <div className="AccueilLayout" style={{'height': height}}>
    
    return (
      <div className="AccueilLayout">
          <div className="AccueilH3">Bienvenue</div>
          <div>Le cabinet de dermographie vous attend !</div>
          <div>Suivez toutes les informations sur Facebook :  </div>
          <div style={{'margin': '20px'}}>
            <a className="AccueilBtn" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/claireledoux1985/">@claireledoux1985</a>
          </div>
          <div style={{'font-size': '2vmax'}}>- Ce site est toujours en cours de développement -</div>
      </div>
    );
  }
}

export default Accueil;
