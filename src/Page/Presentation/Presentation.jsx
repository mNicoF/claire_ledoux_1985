import React from 'react';
import { importAll, findOne } from "../../utils/Images";
import '../../Style/Presentation.css';

const Presentation = (props) => {
  
  const [present_props] = React.useState(props.presentation);
  
  let pres = present_props.complet;
  let presentation = [];

  for (let p in pres) {
    switch (pres[p].type) {
      case 'paragraphe':
        presentation.push(<p key={p}>{pres[p].value}</p>);
        break;
      case 'image':
        const images = importAll(require.context('../../medias/presentation/', true, /\.(webp)$/));
        const image = findOne(images, pres[p].value);
        presentation.push(
          <div key={p+'_div'} className="PresentationImg">
            <img key={p} src={image} alt={pres[p].value} />
          </div>
        );
        break;
      default:
        break;
    }
  }

  return (
    <div className="PresentationLayout Page">
      <h3>{present_props.title}</h3>
      {presentation}
    </div>
  );
}

export default Presentation;
