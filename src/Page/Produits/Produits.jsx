import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

import '../../Style/Produits.css';

const MEDIA_RELATIVE_PATH = '../../medias/produits/';

class Produits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produits: this.props.produits
    };
  }

  render() {

    let cards = [];

    //<CardImg src={require(img)} alt={produit.title} className="ProduitsPics"/>

    this.state.produits.map((produit) => {
      cards.push(
        <Card className="ProduitsCard">
          <CardBody className="ProduitsBody">
            <CardTitle>{produit.title}</CardTitle>
            <CardSubtitle>{produit.detail}</CardSubtitle>
            <CardText>{produit.info}</CardText>
            <Button disabled color="danger" size="lg">{produit.price} €</Button>
          </CardBody>
        </Card>
      )
    });

    return (
      <div className="ProduitsLayout Page">
        {cards}
      </div>
    );
  }
}

export default Produits;
