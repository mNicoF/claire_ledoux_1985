import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../Style/Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      appInfos: this.props.app
    };
  }
  
  render() {

    return (this.state.appInfos.target === "REC") ? (
      <div className="Rec-footer Footer">
        <div className="Footer-left">Ce site est la version de test
        </div>
        <div className="Footer-right">
          aller sur : 
          <a href="http://claireledoux.fr/"
              rel="noopener noreferrer"
              className="Footer-link"> claireledoux.fr</a>
        </div>
      </div>
  ) : (
    <div className="App-footer Footer theme-reverse">
        <div className="Footer-left">
          <FontAwesomeIcon icon={['far', 'copyright']} /> 
          <a href={this.state.appInfos.author.link}
            target="_blank"
            rel="noopener noreferrer"
            className="Footer-link"> {this.state.appInfos.author.name}</a>
        </div>
        <div className="Footer-right" title={"Dernière mise à jour : "+ this.state.appInfos.dateMaJ}>
          Version {this.state.appInfos.version}
        </div>
      </div>
  );
  }
}

export default Footer;
