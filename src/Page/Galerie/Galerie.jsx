import React, { Component } from 'react';
import { Button } from "reactstrap";

import Photos from "./../../Component/Photos/Photos";

class Galerie extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      inGalerie: false,
      target: {
        name: '',
        size: 0
      }
    };
  }

  handleSelect(target) {
    this.setState({
      inGalerie: true
    })
  }

  handleBack() {
    this.setState({
      inGalerie: false
    })
  }

  render() {

    return (
      <div className="Page">

        {this.state.inGalerie ? (
          <React.Fragment>
            <Button onClick={() => this.handleBack()}>{'< Retour'}</Button>
            <Photos folderName="ongles" folderSize={13} />
          </React.Fragment>
        ) : (
            <Button onClick={() => this.handleSelect()}>{'Ongles'}</Button>
          )}

      </div>
    );
  }
}

export default Galerie;
