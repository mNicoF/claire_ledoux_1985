import React, { Component } from "react";
import { Button } from "reactstrap";

class CartCanvas extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle(force) {
    this.setState({
      isOpen: force != null ? force : !this.state.isOpen
    });
  }

  render() {

    return (
      <div>
        <Button color="primary" onClick={() => this.toggle()}>
          Panier
        </Button>

      </div>
    );
  }
}

export default CartCanvas;
