import React, { Component } from 'react';

import '../../Style/Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  render() {

    return (
      <div className="ContactLayout">{/*Page*/}
        <img className="ContactIMG" src={require('../../medias/contact.PNG')} alt="horaires"></img>
      </div>
    );
  }
}

export default Contact;