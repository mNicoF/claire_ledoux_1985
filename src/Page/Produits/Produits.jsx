import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

import '../../Style/Produits.css';

class Produits extends Component {
  constructor(props) {
    super(props);

    this.state = {
      produits: this.props.produits
    };
  }

  render() {

    let cards = [];
    this.state.produits.map((produit) => {
      cards.push(
        <Card className="ProduitsCard">
          <CardBody className="ProduitsBody">
            <CardTitle>{produit.title}</CardTitle>
            <CardSubtitle>{produit.detail}</CardSubtitle>
            <CardText>{produit.info}</CardText>
            <Button disabled color="danger" size="lg">{produit.price} €</Button>
          </CardBody>
          {/*<CardImg src={produit.image} alt={produit.title} className="ProduitsPics"/>*/}
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
