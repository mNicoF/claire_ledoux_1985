import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';

import './AnnonceTMP.css';

class AnnonceTMP extends Component {
  render() {

    let height = (window.innerHeight - 230) + "px";

    return (
      <div className="AnnonceTMPLayout">
        <div className="AnnonceTMP" style={{'height': height}}>
          <div className="AnnonceH3">Bienvenue</div>
          <div>Le cabinet de dermographie est désormé ouvert !</div>
          <div>Retrouverez toujours les informations sur Facebook :  </div>
          <div style={{'margin': '20px'}}>
            <a className="AnnonceBtn" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/claireledoux1985/">@claireledoux1985</a>
          </div>
          <div style={{'font-size': '1em'}}>Ce site est en cours de développement</div>
        </div>
        <div className="HorairesIMGLayout">
          <img className="HorairesIMG" src={require('./horaires.PNG')} alt="horaires" />
        </div>
      </div>
    );
  }
}

export default AnnonceTMP;
