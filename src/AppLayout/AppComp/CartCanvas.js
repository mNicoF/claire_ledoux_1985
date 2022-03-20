import React from "react";
import { Button } from "reactstrap";
//import { Offcanvas } from "react-bootstrap";

const CartCanvas = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [myCart, setMyCart] = React.useState(props.cart);

  React.useEffect(() => {
    setMyCart(props.cart);
  }, []);

  console.log(myCart);

  const toggle = (force) => setIsOpen(force != null ? force : !isOpen);
  //const cleanCart = () => localStorage.setItem('cart', JSON.stringify([]));

  //let CART_LABEL = (props.lang === 'fr') ? "Panier" : "Cart";
  //let EMPTY_CART = (props.lang === 'fr') ? "Vider" : "Empty";

  let cartLength =  myCart.length;
  /*let cartDetail = [];
  for(let c in myCart){
    cartDetail.push(<div>{myCart[c].title}</div>)
  }*/
  
  

  return (
    <div>
      <Button color="primary" onClick={() => toggle()}>
        Panier ({cartLength})
      </Button>

      {/*<Offcanvas show={isOpen} onHide={toggle}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{CART_LABEL}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartDetail}
          <Button color="danger" onClick={() => cleanCart()}>{EMPTY_CART}</Button>
        </Offcanvas.Body>
      </Offcanvas>*/}

    </div>
  );
}

export default CartCanvas;
