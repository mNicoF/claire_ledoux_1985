import React, { Component } from 'react';

import '../../Style/Tarifs.css';

class Tarifs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  render() {

    return (
      <div className="TarifsLayout">
        <img className="TarifEpileIMG" src={require('../../medias/tarifs_epil.PNG')} alt="epilations"></img>
        <img className="TarifSoinsIMG" src={require('../../medias/tarifs_soins.PNG')} alt="soins"></img>
        <img className="TarifDermoIMG" src={require('../../medias/tarifs_dermo.PNG')} alt="dermographie"></img>
      </div>
    );
  }
}

export default Tarifs;
