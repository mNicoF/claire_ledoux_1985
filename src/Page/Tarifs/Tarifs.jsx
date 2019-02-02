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

    let prestations = [];
    let prestaGroups = this.state.prestations;
    for (let g in prestaGroups) {
      prestations.push(<h2 key={g}>{g}</h2>);
      let prestaList = prestaGroups[g];
      for (let p in prestaList){
        prestations.push(<Prestations key={p} presta={p} list={prestaList[p]}/>);
      }
    }

    return (
      <div className="TarifsLayout">
        {prestations}
      </div>
    );
  }
}

export default Tarifs;
