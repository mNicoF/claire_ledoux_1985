import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "reactstrap"

import {
  Collapse,
  Card,
  CardHeader,
  CardBody,
  /*CardText*/
} from 'reactstrap';

const Services = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [tipOpen, setTipOpen] = React.useState([]);
  const [servicesState] = React.useState(props.services);
  const [servicesList] = React.useState(props.list);

  const toggle = (force) => setIsOpen((force != null) ? force : !isOpen);

  const toggleTip = (target) => {
    let newTip = Object.assign({}, tipOpen);
    newTip[target] = !tipOpen[target];
    setTipOpen(newTip);
  }

  const tipLabel = (props.lang === 'fr') ? "Futur prix" : "Futur price";

  let services = [];
  let prix = servicesList;
  let tltpId = 0;
  for (let e in prix) {
    let prixUp = (prix[e].oldPrice) ? (
      <div className="Price">
        {prix[e].oldPrice}
        <span id={"TooltipNewPrice_"+ tltpId}>
          <FontAwesomeIcon icon={["fa", "chart-line"]} style={{ 'marginLeft': '5px', 'color': 'red' }} />
        </span>
        <Tooltip isOpen={tipOpen[e]} target={"TooltipNewPrice_"+ tltpId} toggle={() => toggleTip(e)} >
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
  const spanDevis = (props.lang === 'fr') ? " (sur devis)" : " (on quotation)";

  const header = (servicesState === "Médical" || servicesState === "Medical") ? (
    <span>
      {servicesState}<span style={{ 'fontWeight': 'bold' }}>{spanDevis}</span>
    </span>
  ) : servicesState;

  return (

    <div className="ServicesLayout">
      <Card>
        <CardHeader className="theme1" onClick={() => toggle()}>{header}</CardHeader>
        <Collapse isOpen={isOpen}>
          <CardBody>
            {services}
          </CardBody>
        </Collapse>
      </Card>
    </div>
  );
}

export default Services;
