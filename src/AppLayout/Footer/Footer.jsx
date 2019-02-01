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

    let footer = null;

    if (this.props.rec) {
      footer = (
        <div className="Rec-footer">
          <div className="Footer-left">Ce site est une version de test pour le développement du projet,
          vous ne devriez pas être là... 
          </div>
          <div className="Footer-right">
            Allez directement sur le site officiel -> 
            <a href="http://claireledoux.fr/"
                rel="noopener noreferrer"
                className="Footer-link"> claireledoux.fr</a>
          </div>
        </div>
      );
    } else {
      footer = (
        <div className="App-footer theme-reverse">
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

    return [footer]
  }
}

export default Footer;
