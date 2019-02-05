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
          <div>{e} :</div>
          <div className="Price">{prix[e]}</div>
        </div>
      );
    }

    return (
      <div className="PrestationLayout">
        <Card>
          <CardHeader onClick={() => this.toggle()}>{this.state.presta}</CardHeader>
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
