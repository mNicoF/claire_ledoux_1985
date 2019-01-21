import React, { Component } from 'react';

import '../../Style/Accueil.css';

class Accueil extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  render() {

    let height = (window.innerHeight - 230) + "px";
    return (
      <div className="AccueilLayout">
        <div className="Accueil" style={{'height': height}}>
          <div className="AccueilH3">Bienvenue</div>
          <div>Le cabinet de dermographie est désormé ouvert !</div>
          <div>Retrouverez toujours les informations sur Facebook :  </div>
          <div style={{'margin': '20px'}}>
            <a className="AccueilBtn" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/claireledoux1985/">@claireledoux1985</a>
          </div>
          <div style={{'font-size': '1.2em'}}>Ce site est en cours de développement</div>
        </div>
      </div>
    );
  }
}

export default Accueil;
