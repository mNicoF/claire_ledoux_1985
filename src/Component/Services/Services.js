import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "reactstrap"

import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  /*CardText*/
} from 'reactstrap';

class Services extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleTip = this.toggleTip.bind(this);

    this.state = {
      isOpen: false,
      tipOpen: [],
      services: this.props.services,
      servicesList: this.props.list
    };
  }

  toggle(force) {
    this.setState({
      isOpen: (force != null) ? force : !this.state.isOpen
    });
  }

  toggleTip(target) {
    let newTip = Object.assign({}, this.state.tipOpen);
    newTip[target] = !this.state.tipOpen[target];
    this.setState({
      tipOpen: newTip
    });
  }

  render() {

    let tipLabel = (this.props.lang === 'fr') ?
      "Futur prix"
      : "Futur price";

    let services = [];
    let prix = this.state.servicesList;
    let tltpId = 0;
    for (let e in prix) {
      let prixUp = (prix[e].oldPrice) ? (
        <div className="Price">
          {prix[e].oldPrice}
          <span id={"TooltipNewPrice_"+ tltpId}>
            <FontAwesomeIcon icon={["fa", "chart-line"]} style={{ 'marginLeft': '5px', 'color': 'red' }} />
          </span>
          <Tooltip isOpen={this.state.tipOpen[e]} target={"TooltipNewPrice_"+ tltpId} toggle={() => this.toggleTip(e)} >
            {tipLabel} : {prix[e].newPrice}
          </Tooltip>
        </div>
      ) : (
          <div className="Price">{prix[e]}</div>
        );
      services.push(
        <div key={e} className="PriceLine card-text">
          {(e[0] === '*') ? (
            <div style={{ 'fontWeight': 'bold' }}>{e} {(prix[e] !== "") ? ":" : ""}</div>
          ) : (
              <div>{e} {(prix[e] !== "") ? ":" : ""}</div>
            )}
          {prixUp}
        </div>
      );
      tltpId++;
    }

    // Personnalisation des headers
    let header = (this.state.services === "Médical") ? (
      <span>
        {this.state.services}<span style={{ 'fontWeight': 'bold' }}> (sur devis)</span>
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
