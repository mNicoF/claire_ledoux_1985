import React from "react";
import { Button } from "reactstrap";

const CartCanvas = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = (force) => setIsOpen(force != null ? force : !isOpen);

  return (
    <div>
      <Button color="primary" onClick={() => toggle()}>
        Panier
      </Button>

    </div>
  );
}

export default CartCanvas;
