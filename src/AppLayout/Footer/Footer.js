import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Footer.css';

class Footer extends Component {

  //<FontAwesomeIcon icon={{ prefix: 'far', iconName: 'copyright' }} spin /> Nicolas Forget
  
  render() {
    return (
      <div className="App-footer theme-reverse">
        <div className="Footer-left">
          <FontAwesomeIcon icon={['far', 'copyright']} /> Nicolas Forget
        </div>
        <div className="Footer-right" title="Dernière mise à jour : 05/11/2018">
          Version 0.1.1
        </div>
      </div>
    );
  }
}

export default Footer;
