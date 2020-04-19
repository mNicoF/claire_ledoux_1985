import React, { Component } from 'react';

class Pres extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    
    let title= (this.props.lang === 'fr')? "Présentation" : "Presentation"
    
    return (
      <div className="PresLayout">
        <h3>{title}</h3>
        <div className="PresContent">
          {this.props.presentation.content}
        </div>
      </div>
    );
  }
}

export default Pres;
