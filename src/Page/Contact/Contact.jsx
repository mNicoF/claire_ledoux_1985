import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';

import Infos from './../../Component/Infos/Infos';
import GenericTag from './../../Component/GenericTag';

import '../../Style/Contact.css';

const Contact = (props) => {

  const [contacts] = React.useState(props.contact);
  const [info, setInfo] = React.useState('');

  const sendMail = (mail) => {
    props.sendMail(mail);
  }

  const handleMoreInfo = (event) => {
    //besoin du type de device pour forcer la taille de l'info facebook
    const device = props.device;
    const currTarget = (info.props) ? info.props.contact : "";
    let nextTarget = contacts[event.target.id];
    let tag = (nextTarget.title !== currTarget.title) ? (
      <Infos contact={nextTarget.title} device={device} sendMail={(mail) => sendMail(mail)}/>
    ) : "";
    setInfo(tag);
  }

  React.useEffect(() => {
    handleMoreInfo({ 'target': { 'id': 3 } });
  });

  let listGroupItem = [];
  for (let c in contacts) {
    /*let moreInfo = (contacts[c].moreInfo) ? (
      <Button id={c} className="moreInfoBtn theme" onClick={this.handleMoreInfo}>+</Button>
    ) : (<></>);*/
    listGroupItem.push(
      <ListGroupItem key={c} className="GroupItem">
        <GenericTag target={contacts[c].title} /> {' : '}
        <GenericTag target={contacts[c].value} />
        {/*moreInfo*/}
      </ListGroupItem>)
  }

  let listGroupHeading = (props.currLang === 'fr')? 'Information et contacts' : 'Information and contact';

  let listGroup = (
    <ListGroup className="ListGroup">
      <ListGroupItem className="GroupItemHeader theme1">
        <ListGroupItemHeading>{listGroupHeading}</ListGroupItemHeading>
      </ListGroupItem>
      {listGroupItem}
    </ListGroup>
  );

  return (
    <div className="ContactLayout Page">
      {listGroup}
      {info}
    </div>
  );
}


export default Contact;