import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Class qui prend un objet et permet de générer une balise html correspondante
 * Paramètres
 * 
 * * label : text qui sera affiché dans la balise
 * * type : type de la balise [link, mail, phone, text, ...]
 * * value : valeur pour un select ou un href, ou autre
 * * icon : valeur de l'icon pour FontAwesomeIcon : ["far", "copyright"]
 * * classN : liste de className à ajouter à la balise
 */
class GenericTag extends Component {
  constructor(props) {
    super(props);
    
    this.setTag = this.setTag.bind(this);

    this.state = {
      target: this.props.target
    };
  }

  setTag(target) {
    const label = target.label;
    const type = target.type;
    const value = (target.value)? target.value : "";
    const cName = (target.classN)? target.classN : [];

    let tag = (<></>);
    switch(type) {
      case 'link':
        tag = (<a className={cName} rel="noopener noreferrer" target="_blank" href={value}>{label}</a>);
        break;
      case 'mail':
        tag = (<a className={cName} rel="noopener noreferrer" href={"mailto:"+value}>{label}</a>);
        break;
      case 'phone':
        tag = (<a className={cName} rel="noopener noreferrer" href={"tel:"+value}>{label}</a>);
        break;
      case 'text':
        tag = (<span className={cName}>{label}</span>);
        break;
      default:
        return;
    }

    if(target.icon){//target.icon){
      tag = (
        <>
          <FontAwesomeIcon icon={target.icon} />{' '}
          {tag}
        </>
      );
    }

    return tag;
  }

  render() {

    let tag = this.setTag(this.state.target); //this.state.label, this.state.value, this.state.type, this.state.classN);

    return (
      <>
        {tag}
      </>
    );
  }
}

export default GenericTag;
