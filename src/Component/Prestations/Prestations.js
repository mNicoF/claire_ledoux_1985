import React, { Component } from 'react';

import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  /*CardText*/ } from 'reactstrap';

class Prestations extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
    this.state = {
      isOpen: false,
      presta: this.props.presta,
      prestaList: this.props.list
    };
  }

  toggle(force) {
    this.setState({
      isOpen: (force != null)? force : !this.state.isOpen
    });
  }

  render() {
    let prestations = [];
    let prix = this.state.prestaList;
    for (let e in prix) {
      //prestations.push(<div key={e} className="PriceLine">{e} : {prix[e]}</div>);
      prestations.push(
        <div key={e} className="PriceLine card-text">
          {(e[0] === '*')? (
            <div style={{'fontWeight':'bold'}}>{e} {(prix[e] !== "")? ":" : ""}</div>
          ) : (
            <div>{e} {(prix[e] !== "")? ":" : ""}</div>
          )}
          <div className="Price">{prix[e]}</div>
        </div>
      );
    }

    // Personnalisation des headers
    let header = (this.state.presta === "Médical") ? (
      <span>
        {this.state.presta}<span style={{'fontWeight':'bold'}}> (sur devis)</span>
      </span>
    ) : this.state.presta; 

    return (

      <div className="PrestationLayout">
        <Card>
          <CardHeader className="theme1" onClick={() => this.toggle()}>{header}</CardHeader>
          <Collapse isOpen={this.state.isOpen}>
            <CardBody>
              {prestations}
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default Prestations;
