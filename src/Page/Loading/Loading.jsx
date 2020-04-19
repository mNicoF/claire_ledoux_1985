import React, { Component } from 'react';

import '../../Style/Loading.css';

class Loading extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  render() {

    return (
      <div className="LoadingLayout Page">
          <h3>Chargement...</h3>
      </div>
    );
  }
}

export default Loading;