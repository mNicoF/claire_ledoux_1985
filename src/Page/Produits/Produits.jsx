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
      let prices = [];
      produit.price.map((p) => {
        prices.push(<Button disabled className="noBtn" color="danger" size="lg" style={{'marginRight':'10px'}}>{p} €</Button>)
      });
      cards.push(
        <Card className="ProduitsCard">
          <CardBody className="ProduitsBody">
            <CardTitle>{produit.title}</CardTitle>
            <CardSubtitle>{produit.detail}</CardSubtitle>
            <CardText>{produit.info}</CardText>
            {prices}
          </CardBody>
          <CardImg src={require('../../medias/produits/' + produit.image + '.webp')} alt={produit.image} className="ProduitsPics" />
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
