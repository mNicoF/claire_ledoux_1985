import React from "react";

//class FooterRec extends Component {
const FooterRec = (props) => {
  return (
    <div className="Rec-footer Footer">
      <div
        className="Footer-left"
        title={"Développé par : " + props.infos.author.name}
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
            props.version +
            " (" +
            props.dateMaJ +
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

export default FooterRec;
