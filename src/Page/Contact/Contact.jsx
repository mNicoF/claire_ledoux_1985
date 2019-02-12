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
      info: ''//(<Infos target={"Horaires"} />)
    };
  }

  handleMoreInfo(event) {
    const currTarget = (this.state.info.props)? this.state.info.props.contact : "";
    let nextTarget = this.state.contact[event.target.id];
    let tag = (nextTarget.title !== currTarget.title)? (<Infos contact={nextTarget}/>) : "";
    this.setState({
      info: tag
    })
  }

  render() {

    const contacts = this.state.contact;
    let listGroupItem = [];
    for(let c in contacts){
      listGroupItem.push(
        <ListGroupItem key={c}>
          {contacts[c].title + " : "}
          <GenericTag label={contacts[c].label} value={contacts[c].value} type={contacts[c].type}/>
          <Button id={c} className="moreInfoBtn theme" onClick={this.handleMoreInfo}>+</Button>
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