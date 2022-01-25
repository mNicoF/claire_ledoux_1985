import React from 'react';
import { importAll, findOne } from "../../utils/Images";
import GenericTag from './../../Component/GenericTag';

import '../../Style/Ateliers.css';

const Ateliers = () => {

  /*
  Notes: ["A noter : venir démaquiller et/ou cheveux lavés du jour même"]
  content: (2) [{…}, {…}] { "type": "text", "icon": [ "far", "clock" ], "label": "" }
  photos: ""
  prices: {Tarif du cours privé (environs 1h): "40 €*", Tarif de groupe (1h30): "30 € par personnes*"}
  */

  let ateliersList = [];

  for (let a in this.props.ateliers) {
    let atelier = [];

    //titre
    atelier.push(<h3 key={"title"+a} className="AtelierTitle">{this.props.ateliers[a].title}</h3>);

    //photos
    let photo = this.props.ateliers[a].photos[this.props.device];
    if (photo) {
      const images = importAll(require.context('../../medias/ateliers/', true, /\.(webp)$/));
      const image = findOne(images, photo);
      atelier.push(
        <img key={"photo"+a} className="AtelierPhoto" src={image} alt={photo} />
      );
    }


    //contenus
    atelier.push(
      this.props.ateliers[a].content.map((c, i) => {
        let contenu = [];
        contenu.push(<GenericTag target={c} key={"contentLine"+i}></GenericTag>);
        return (
          <div key={"content"+a+"."+i}>
            {contenu}
          </div>
        )
      })
    );
    //prix
    let prices = this.props.ateliers[a].prices
    let prix = [];
    let pIdx = 0;
    for (let p in prices) {
      prix.push(<div key={"prixLine"+pIdx}>{p}: {prices[p]}</div>);
      pIdx++;
    }
    atelier.push(
      <div key={"prix"+a} className="AtelierPrix">
        {prix}
      </div>
    );
    //notes
    if(this.props.ateliers[a].notes[0]) {
      atelier.push(
        <div key={"notes"+a} className="AtelierNote">
          {(localStorage.getItem('siteLang') === "fr")? "A noter :": "Please note :"}
          {this.props.ateliers[a].notes.map((n, i) => {
          let notes = [];
          notes.push(n);
          return (<div key={"noteLine"+i}>{notes}</div>);
        })}
        </div>
      );
    }

    //ajout à la liste d'ateliers
    ateliersList.push(
      <div key={"atelier"+a} className="AtelierLayout">
        {atelier}
        <hr style={{'border': 'solid 1px rgba(0, 0, 0, 0.250)', 'margin': '60px'}}/>
      </div>
    );
  }

  let conditions = (localStorage.getItem('siteLang') === "fr")? "* Cours et ateliers mixte et tous âges confondus.": "* Lessons and workshop gender mixte and for all ages";

  return (
    <div className="AteliersLayout Page">
      {ateliersList}
      <div className="AteliersCond">{conditions}</div>
    </div>
  );
}

export default Ateliers;
