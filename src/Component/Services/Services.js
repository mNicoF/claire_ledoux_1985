import React, { Component } from 'react';

import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  /*CardText*/ } from 'reactstrap';

class Services extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
    this.state = {
      isOpen: false,
      services: this.props.services,
      servicesList: this.props.list
    };
  }

  toggle(force) {
    this.setState({
      isOpen: (force != null)? force : !this.state.isOpen
    });
  }

  render() {
    let services = [];
    let prix = this.state.servicesList;
    for (let e in prix) {
      services.push(
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
    let header = (this.state.services === "Médical") ? (
      <span>
        {this.state.services}<span style={{'fontWeight':'bold'}}> (sur devis)</span>
      </span>
    ) : this.state.services; 

    return (

      <div className="ServicesLayout">
        <Card>
          <CardHeader className="theme1" onClick={() => this.toggle()}>{header}</CardHeader>
          <Collapse isOpen={this.state.isOpen}>
            <CardBody>
              {services}
            </CardBody>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default Services;
