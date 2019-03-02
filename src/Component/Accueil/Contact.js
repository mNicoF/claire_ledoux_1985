import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    const contactList = this.props.contact;
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
}

export default Contact;
