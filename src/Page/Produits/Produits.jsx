import React from 'react';
import { Badge, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { importAll, findOne } from "../../utils/Images";
//import CartCanvas from "../../AppLayout/AppComp/CartCanvas";

import '../../Style/Produits.css';

const Produits = (props) => {

  const [produits] = React.useState(props.produits);
  //const [myCart, setMyCart] = React.useState([]);

  /*const addToCart = (produit) => {
    let newCart = myCart
    newCart.push(produit);
    setMyCart(newCart);
  }*/

  //let NO_STOCK_LABEL = (props.lang === 'fr') ? "Réaprovisionnement..." : "replenishment...";
  //let ADD_CART_LABEL = (props.lang === 'fr') ? "Ajouter au panier" : "Add to Cart";

  let cards = [];
  for(let p in produits) {
    if(produits[p].stock > -1){
      let prices = [];
      prices.push(
        produits[p].price.map((p) => {
          return (<Badge key={p} color="secondary" className="PriceBdg">{p} €</Badge>);
        })
      );
      
      let cart = [];
      /*if(produits[p].stock === 0){
        cart.push(<Button key={"cartBtn_"+produits[p].image} disabled color="danger" size="lg">{NO_STOCK_LABEL}</Button>);
      } else {
        cart.push(<Button key={"cartBtn_"+produits[p].image} color="success" size="lg" onClick={() => addToCart(produits[p])}>{ADD_CART_LABEL}</Button>);
      }*/
      const images = importAll(require.context('../../medias/produits/', true, /\.(webp)$/));
      const image = findOne(images, produits[p].image);
      cards.push(
        <Card key={"card_"+produits[p].image} className="ProduitsCard">
          <CardBody className="ProduitsBody">
            <CardTitle>{produits[p].title}</CardTitle>
            <CardSubtitle style={{ 'marginBottom': '0.5rem' }}>{produits[p].detail}</CardSubtitle>
            <CardText style={{ 'fontSize': '1rem' }}>{produits[p].info}</CardText>
            {prices}
            {cart}
          </CardBody>
          <CardImg src={image} alt={produits[p].image} className="ProduitsPics" />
        </Card>
      )
    }
  }

  return (
    <div className="ProduitsLayout Page">
      {/*<CartCanvas lang={props.lang} cart={myCart} />*/}
      {cards}
    </div>
  );
}

export default Produits;
