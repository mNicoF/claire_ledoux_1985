import React, { Component } from 'react';

import '../../Style/Tarifs.css';

import Prestations from './../../Component/Prestations/Prestations';

class Tarifs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      prestations: this.props.prestations
    };
  }

  render() {

    let tiles = [];
    let prestaGroups = this.state.prestations;

    for (let g in prestaGroups) {
      let prestations = [];
      prestations.push(<div className="TileHeader" key={g}>{g.toUpperCase()}</div>);
      let prestaList = prestaGroups[g];

      for (let p in prestaList){
        prestations.push(<Prestations key={p} presta={p} list={prestaList[p]}/>);
      }
      tiles.push(<div key={"tile_"+g} className="TarifsTiles">{prestations}</div>);
    }

    return (
      <div className="TarifsLayout Page">
        {tiles}
      </div>
    );
  }
}

export default Tarifs;
