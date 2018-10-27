import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';

import './AnnonceTMP.css';

class AnnonceTMP extends Component {
  render() {

    let height = (window.innerHeight - 230) + "px";

    return (
      <div className="AnnonceTMP" style={{'height': height}}>
        <div className="AnnonceH3">Bienvenue</div>
        <div>Ce site est actuellement en chantier</div>
        <div>Pendant ce temps vous retrouverez toutes les informations utiles sur ma page Facebook :  </div>
        <div style={{'margin': '20px'}}>
          <a className="AnnonceBtn" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/claireledoux1985/">@claireledoux1985</a>
        </div>
      </div>
    );
  }
}

export default AnnonceTMP;
