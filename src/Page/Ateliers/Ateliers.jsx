import React, { Component } from 'react';

import GenericTag from './../../Component/GenericTag';

import '../../Style/Ateliers.css';

class Ateliers extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {


    //Notes: ["A noter : venir démaquiller et/ou cheveux lavés du jour même"]
    //content: (2) [{…}, {…}] { "type": "text", "icon": [ "far", "clock" ], "label": "" }
    //photos: ""
    //prices: {Tarif du cours privé (environs 1h): "40 €*", Tarif de groupe (1h30): "30 € par personnes*"}


    let ateliersList = [];

    for (let a in this.props.ateliers) {
      let atelier = [];

      //titre
      atelier.push(<h3 key={"title"+a} className="AtelierTitle">{this.props.ateliers[a].title}</h3>);

      //photos
      let photo = this.props.ateliers[a].photos[this.props.device];
      if (photo) {
        atelier.push(
          <img key={"photo"+a} className="AtelierPhoto" src={require('../../medias/ateliers/' + photo)} alt={photo} />
        );
      }


      //contenus
      atelier.push(
        this.props.ateliers[a].content.map((c, i) => {
          let contenu = [];
          contenu.push(<GenericTag target={c} key={"contentLine"+i}></GenericTag>);
          return (
            <div key={"content"+a}>
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
      atelier.push(
        <div key={"notes"+a} className="AtelierNote">
          A noter :
          {this.props.ateliers[a].notes.map((n, i) => {
          let notes = [];
          notes.push(n);
          return (<div key={"noteLine"+i}>{notes}</div>);
        })}
        </div>
      );

      //ajout à la liste d'ateliers
      ateliersList.push(
        <div key={"atelier"+a} className="AtelierLayout">
          {atelier}
          <hr />
        </div>
      );
    }

    return (
      <div className="AteliersLayout Page">
        {ateliersList}
        <div className="AteliersCond">* Cours et ateliers mixte et tous âges confondus.</div>
      </div>
    );
  }
}

export default Ateliers;
