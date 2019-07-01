import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="App-footer Footer theme-reverse">
        <div className="Footer-left">
          <FontAwesomeIcon icon={["far", "copyright"]} />
          <a
            href={this.props.infos.author.link}
            target="_blank"
            rel="noopener noreferrer"
            className="Footer-link"
          >
            {" "}
            {this.props.infos.author.name}
          </a>
        </div>
        <div
          className="Footer-right"
          title={"Dernière mise à jour : " + this.props.infos.dateMaJ}
        >
          Version {this.props.infos.version}
        </div>
      </div>
    );
  }
}

export default Footer;
