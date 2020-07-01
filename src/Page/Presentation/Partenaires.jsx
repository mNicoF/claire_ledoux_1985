import React, { Component } from 'react';

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
          partenaires.push(<p key={p} className="PresentationTitle">{pres[p].value}</p>);
          break;
        case 'paragraphe':
          partenaires.push(<p key={p}>{pres[p].value}</p>);
          break;
        case 'lien':
          partenaires.push(<a rel="noopener noreferrer" target="_blank" href={pres[p].url}>{pres[p].value}</a>);
          break;
        case 'image':
          partenaires.push(
            <div key={p + '_div'} className="PresentationImg">
              <img key={p} src={require('../../medias/partenaires/' + pres[p].value + '.webp')} alt={pres[p].value} />
            </div>
          );
          break;
        case 'liste':
          let liste = [];
          for (let c in pres[p].content) {
            liste.push(<li>{pres[p].content[c]}</li>);
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
