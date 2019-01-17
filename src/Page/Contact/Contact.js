import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';

import './Contact.css';
import ContactMenu from './ContactMenu.js';
import ContactDetail from './ContactDetail.js';

class Contact extends Component {
  render() {

    return (
      <div>
        <ContactMenu />
        <ContactDetail />
      </div>
    );
  }
}

export default Contact;
