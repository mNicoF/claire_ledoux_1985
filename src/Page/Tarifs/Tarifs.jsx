import React, { Component } from 'react';

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

      for (let sl in servicesList){
        services.push(<Services key={sl} services={sl} list={servicesList[sl]}/>);
      }
      tiles.push(<div key={"tile_"+sg} className="TarifsTiles">{services}</div>);
    }

    return (
      <div className="TarifsLayout Page">
        {tiles}
      </div>
    );
  }
}

export default Tarifs;
