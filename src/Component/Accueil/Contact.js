import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let adresse = <div>13 Rue de l'Arsenal, 79000 Niort</div>
    let tel = <div>09 83 30 07 01</div>
    let mail =  <div>claire.ledoux.1985@gmail.com</div>

    return (
      <div className="ContactLayout">
        {adresse} {tel} {mail}
      </div>
    );
  }
}

export default Contact;
