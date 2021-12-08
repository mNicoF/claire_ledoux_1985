import React, { Component } from 'react';
import { importAll, findOne } from "../../utils/Images";
import '../../Style/Presentation.css';

class Presentation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      presentation: {
        title: this.props.presentation.title,
        content: this.props.presentation.complet,
      }
    };
  }
  
  render() {

    let pres = this.state.presentation.content;
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
        <h3>{this.state.presentation.title}</h3>
        {presentation}
      </div>
    );
  }
}

export default Presentation;
