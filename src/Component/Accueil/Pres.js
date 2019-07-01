import React, { Component } from 'react';

class Pres extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    return (
      <div className="PresLayout">
        <h3>Présentation{/*this.props.presentation.title*/}</h3>
        {this.props.presentation.content}
      </div>
    );
  }
}

export default Pres;
