import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Class qui prend un objet et permet de générer une balise html correspondante
 * Paramètres
 * 
 * * label : text qui sera affiché dans la balise
 * * type : type de la balise [link, mail, phone, text, ...]
 * * value : valeur pour un select ou un href, ou autre
 * * icon : valeur de l'icon pour FontAwesomeIcon : ["far", "copyright"]
 * * classN : liste de className à ajouter à la balise
 */

const GenericTag = (props) => {
  
  const [target] = React.useState(props.target);

  const setTag = (target) => {
    const label = target.label;
    const type = target.type;
    const value = (target.value) ? target.value : "";
    const cName = (target.classN) ? target.classN : [];

    let tag = (<></>);
    switch (type) {
      case 'link':
        tag = (<a className={cName} rel="noopener noreferrer" target="_blank" href={value}>{label}</a>);
        break;
      case 'mail':
        tag = (<a className={cName} rel="noopener noreferrer" href={"mailto:" + value}>{label}</a>);
        break;
      case 'phone':
        tag = (<a className={cName} rel="noopener noreferrer" href={"tel:" + value}>{label}</a>);
        break;
      case 'text':
        tag = (<span className={cName}>{label}</span>);
        break;
      case 'list':
        //on retire le premier élément qui sera le titre de la liste
        let list = label.slice(1).map((l, i) => {
          let li = [];
          li.push(<li key={"line"+i}>{l}</li>);
          return (
            <ul key={"liste"+i}>
              {li}
            </ul>
          )
        });
        tag = (
          <div className={cName}>
            <h4>{label[0]}</h4>
            {list}
          </div>
        );
        break;
      default:
        return;
    }

    if (target.icon) {
      tag = (
        <>
          <FontAwesomeIcon icon={target.icon} />{' '}
          {tag}
        </>
      );
    }

    return tag;
  }

  let tag = setTag(target); //this.state.label, this.state.value, this.state.type, this.state.classN);

  return (
    <>
      {tag}
    </>
  );
}

export default GenericTag;
