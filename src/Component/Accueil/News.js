import React, { Component } from 'react';
import { Jumbotron, Badge } from 'reactstrap';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let news = (
      <Jumbotron>
        <h3>Nouveau <Badge color="danger">2</Badge></h3>
        <hr className="my-2" />
        <p className="lead">Découvrez la présentation du cabinet de dermographie</p>
        <hr className="my-2" />
        <p className="lead">Retrouvez plus d'informations dans la partie contact</p>
      </Jumbotron>
    );

    return (
      <div className="NewsLayout">
        {news}
      </div>
    );
  }
}

export default News;
