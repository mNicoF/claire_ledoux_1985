import React from 'react';
import { Badge } from 'reactstrap';

const News = (props) => {
  const [isOpen, setIsOpen] = React.useState((sessionStorage.getItem('newsToggle') === "close") ? false : true);
  const [badgeColor, setBadgeColor] = React.useState(localStorage.getItem('newsSeen'));
  const [title] = React.useState(props.news.title);
  const [news] = React.useState(props.news.content);

  const toggle = () => {
    if (!isOpen) {
      sessionStorage.setItem('newsToggle', "open");
    } else {
      sessionStorage.setItem('newsToggle', "close");
    }

    if (badgeColor === 'danger') {
      localStorage.setItem('newsSeen', 'secondary');
      setIsOpen(!isOpen);
      setBadgeColor('secondary');
    } else {
      setIsOpen(!isOpen);
    }

  }

  let newsContent = [];

  /* Exemple pour ajouter un liens dans les news :
  {
    "text":"Photos de Piercing et bijoux dans la @link",
    "link":"Galerie",
    "urlType": "in" // "out"
    "url":"/photos" // "http://www.claireledoux1985.fr/fr/photos"
  }*/

  if(news[0].text !== "") {
    let jumboContent = [];
    for (let n in news) {
      jumboContent.push(<hr key={"hr_" + n} className="my-2" />);
      let newsTxt = [];
      // if url is "in" the site put the bas url, add the lang and then add the news.url
      let urlBase = (news[n].urlType === "in")? "http://www.claireledoux1985.fr/" + props.lang : "";
      let urlTarget = (news[n].urlType === "in")? "_self" : "_blank";
      if (news[n].url) {
        newsTxt.push(
        <p key={"p_" + n} className="lead">
          {news[n].text.split('@link')[0]}
          <a href={urlBase + news[n].url} target={urlTarget} rel="noopener noreferrer">{news[n].link}</a>
          {news[n].text.split('@link')[1]}
        </p>);
      } else {
        newsTxt.push(<p key={"p_" + n} className="lead">{news[n].text}</p>);
      }
      jumboContent.push(newsTxt);
    }

    newsContent = (
      <div className="jumbotron">
        <h3 className="NewsHeader" onClick={() => toggle()}>{title} <Badge color={badgeColor}>{news.length}</Badge></h3>
        {isOpen && jumboContent}
      </div>
    );

  }

  return (
    <div className="NewsLayout">
      {newsContent}
    </div>
  );
}

export default News;
