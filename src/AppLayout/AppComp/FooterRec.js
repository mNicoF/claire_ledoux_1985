import React, { Component } from "react";

class FooterRec extends Component {
  render() {
    return (
      <div className="Rec-footer Footer">
        <div
          className="Footer-left"
          title={"Développé par : " + this.props.infos.author.name}
        >
          Ce site est la version de test
        </div>
        <div className="Footer-right">
          aller sur :
          <a
            href="http://claireledoux1985.fr/"
            rel="noopener noreferrer"
            className="Footer-link"
            title={
              "MAJ : " +
              this.props.infos.version +
              " (" +
              this.props.infos.dateMaJ +
              ")"
            }
          >
            {" "}
            claireledoux1985.fr
          </a>
        </div>
      </div>
    );
  }
}

export default FooterRec;
