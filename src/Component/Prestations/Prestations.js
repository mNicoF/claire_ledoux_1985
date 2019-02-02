import React, { Component } from 'react';

class Prestations extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      presta: this.props.presta,
      prestaList: this.props.list
    };
  }

  render() {
    let prestations = [];
    let prix = this.state.prestaList;
    for (let p in prix) {
        prestations.push(
            <div key={p}>{p} : {prix[p]}</div>
        );
    }

    return (
      <div className="PrestationLayout">
        <h4>{this.state.presta}</h4>
        {prestations}
      </div>
    );
  }
}

export default Prestations;
