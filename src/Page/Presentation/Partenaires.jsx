import React, { Component } from 'react';
import { importAll, findOne } from "../../utils/Images";
import '../../Style/Presentation.css';

class Partenaires extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partenaires: {
        title: this.props.partenaires.title,
        content: this.props.partenaires.complet,
      }
    };
  }

  render() {

    let pres = this.state.partenaires.content;
    let partenaires = [];

    for (let p in pres) {
      switch (pres[p].type) {
        case 'titre':
          partenaires.push(<p key={pres[p].type+"_"+p} className="PresentationTitle">{pres[p].value}</p>);
          break;
        case 'paragraphe':
          partenaires.push(<p key={pres[p].type+"_"+p}>{pres[p].value}</p>);
          break;
        case 'lien':
          partenaires.push(<a rel="noopener noreferrer" target="_blank" href={pres[p].url}>{pres[p].value}</a>);
          break;
        case 'image':
          const images = importAll(require.context('../../medias/partenaires/', true, /\.(webp)$/));
          const image = findOne(images, pres[p].value);
          partenaires.push(
            <div key={pres[p].type+"_"+p+'_div'} className="PresentationImg">
              <img key={pres[p].type+"_"+p} src={image} alt={pres[p].value} />
            </div>
          );
          break;
        case 'liste':
          let liste = [];
          for (let c in pres[p].content) {
            liste.push(<li key={pres[p].content[c]+"_"+c}>{pres[p].content[c]}</li>);
          }
          partenaires.push(
            <section>
              <p key={p} className="PresentationTitle">{pres[p].value}</p>
              <ul>
                {liste}
              </ul>
            </section>
          );
          break;
        default:
          break;
      }

    }

    return (
      <div className="PresentationLayout Page">
        <h3>{this.state.partenaires.title}</h3>
        {partenaires}
      </div>
    );
  }
}

export default Partenaires;
