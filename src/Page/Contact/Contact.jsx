import React, { Component } from 'react';
import { ListGroup, ListGroupItem,ListGroupItemHeading, Button } from 'reactstrap';

import Infos from './../../Component/Infos/Infos';
import GenericTag from './../../Component/GenericTag';

import '../../Style/Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    
    this.handleMoreInfo = this.handleMoreInfo.bind(this);

    this.state = {
      contact: this.props.contact,
      info: ''
    };
  }

  componentDidMount(){
    this.handleMoreInfo({'target':{'id':0}});
  }

  handleMoreInfo(event) {
    //besoin du type de device pour forcer la taille de l'info facebook
    const device = this.props.app.device;
    const currTarget = (this.state.info.props)? this.state.info.props.contact : "";
    let nextTarget = this.state.contact[event.target.id];
    //TODO: vérifier qu'avec la nouvelle structure de contact il n'y a pas de soucis
    let tag = (nextTarget.title !== currTarget.title)? (<Infos contact={nextTarget.title} device={device}/>) : "";
    this.setState({
      info: tag
    })
  }

  render() {

    const contacts = this.state.contact;
    let listGroupItem = [];
    for(let c in contacts){
      const titleLab = contacts[c].title.label;
      let moreInfo = (titleLab === "Horaires" || titleLab === "Facebook" || titleLab === "Adresse") ? (
        <Button id={c} className="moreInfoBtn theme" onClick={this.handleMoreInfo}>+</Button>
      ) : (<></>);
      listGroupItem.push(
        <ListGroupItem key={c} className="GroupItem">
          <GenericTag target={contacts[c].title} /> {' : '}
          <GenericTag target={contacts[c].value} />
          {moreInfo}
        </ListGroupItem>)
    }

    let listGroup = (
      <ListGroup className="ListGroup">
        <ListGroupItem className="GroupItemHeader theme1">
          <ListGroupItemHeading>Informations et contacts</ListGroupItemHeading>
        </ListGroupItem>
        {listGroupItem}
      </ListGroup>
    );

    let infoTag = this.state.info;

    return (
      <div className="ContactLayout Page">
        {listGroup}
        {infoTag}
      </div>
    );
  }
}

export default Contact;