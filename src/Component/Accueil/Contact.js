import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = (props) => {

  const contactList = props.contact;
  let contact = [];
  for(let c in contactList){
    contact.push(
      <div key={c}>
        <FontAwesomeIcon icon={contactList[c].title.icon} />{' '}
        {contactList[c].value.label}
      </div>
    );
  }

  return (
    <div className="ContactLayout">
      {contact}
    </div>
  );
}

export default Contact;
