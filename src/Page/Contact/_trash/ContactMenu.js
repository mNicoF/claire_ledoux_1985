import React, { Component } from 'react';
//import { Button } from 'react-bootstrap';

class ContactMenu extends Component {
  render() {

    return (
      <div className="ContactLayout">
        <h1>Contact</h1>
        <div className="adresseLayout">
          <div>Adresse : </div>
          <div>13 rue de l'Arsenal, 79000 NIORT</div>
        </div>
        <div className="telephoneLayout">
          <div>Téléphone : </div>
          <div>0983300701</div>
        </div>
        <div className="horaireLayout">
          <div>Horaire : </div>
          <div>
          Lundi au vendredi de 9h à 18h
          (présence téléphonique de 8h30 à 19h30)
          </div>
        </div>
        <div className="emailLayout">
          <div>email ; </div>
          <div>claire.ledoux.1985@gmail.com</div>
        </div>
      </div>
    );
  }
}

export default ContactMenu;
