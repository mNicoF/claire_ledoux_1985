import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//class Footer extends Component {
const Footer = (props) => {
  return (
    <div className="App-footer Footer theme-reverse">
      <div className="Footer-left">
        <FontAwesomeIcon icon={["far", "copyright"]} />
        <a
          href={props.infos.author.link}
          target="_blank"
          rel="noopener noreferrer"
          className="Footer-link"
        >
          {" "}
          {props.infos.author.name}
        </a>
      </div>
      <div
        className="Footer-right"
        title={"Dernière mise à jour : " + props.dateMaJ}
      >
        Version {props.version}
      </div>
    </div>
  );
}

export default Footer;
