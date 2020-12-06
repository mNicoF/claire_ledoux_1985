import React, { Component } from 'react';

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../Style/Tarifs.css';

import Services from './../../Component/Services/Services';

class Tarifs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: this.props.services
    };
  }

  render() {

    let tiles = [];
    let servicesGroups = this.state.services;

    for (let sg in servicesGroups) {
      let services = [];
      services.push(<div className="TileHeader" key={sg}>{sg.toUpperCase()}</div>);
      let servicesList = servicesGroups[sg];

      for (let sl in servicesList) {
        services.push(<Services key={sl} lang={this.props.lang} services={sl} list={servicesList[sl]} />);
      }
      tiles.push(<div key={"tile_" + sg} className="TarifsTiles">{services}</div>);
    }

    /*
    let topLine = (this.props.lang === 'fr') ?
      "ATTENTION NOUVEAUX TARIFS ; profitez des prix actuels avant changement le 1er septembre 2020 !"
      : "WARNING NEW PRICES ; enjoy the current prices befor they change the 1st of september 2020 !";
      
      <p style={{ 'textAlign': 'center' }}>
        <FontAwesomeIcon icon={["fa", "chart-line"]} style={{ 'marginRight': '5px', 'color': 'red' }} />
        {topLine}
      </p>
      */

    return (
      <div className="TarifsLayout Page">
        
        <div className="TilesLayout">
          {tiles}
        </div>
      </div>
    );
  }
}

export default Tarifs;
