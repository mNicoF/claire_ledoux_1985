import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../Style/Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appInfos: this.props.app
    };
  }

  render() {
    return (this.state.appInfos.target === "http://www.claireledoux1985.fr/")? (
      <div className="App-footer Footer theme-reverse">
        <div className="Footer-left">
          <FontAwesomeIcon icon={["far", "copyright"]} />
          <a
            href={this.state.appInfos.author.link}
            target="_blank"
            rel="noopener noreferrer"
            className="Footer-link"
          >
            {" "}
            {this.state.appInfos.author.name}
          </a>
        </div>
        <div
          className="Footer-right"
          title={"Dernière mise à jour : " + this.state.appInfos.dateMaJ}
        >
          Version {this.state.appInfos.version}
        </div>
      </div>
    ) : (
      <div className="Rec-footer Footer">
        <div className="Footer-left">Ce site est la version de test</div>
        <div className="Footer-right">
          aller sur :
          <a
            href="http://claireledoux1985.fr/"
            rel="noopener noreferrer"
            className="Footer-link"
            title={"MAJ : " + this.state.appInfos.version + " (" + this.state.appInfos.dateMaJ + ")"}
          >
            {" "}
            claireledoux1985.fr 
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
