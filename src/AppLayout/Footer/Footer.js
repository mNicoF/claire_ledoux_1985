import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="App-footer theme-reverse">
        <div className="Footer-left">
          <i className="fa fa-copyright"></i> Nicolas Forget
        </div>
        <div className="Footer-right" title="Dernière mise à jour : 14/10/2018">
          Version 0.1.0
        </div>
      </div>
    );
  }
}

export default Footer;
