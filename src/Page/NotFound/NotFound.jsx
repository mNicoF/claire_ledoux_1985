import React, { Component } from 'react';

import '../../Style/NotFound.css';

class NotFound extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    };
  }

  render() {

    return (
      <div className="NotFoundLayout Page">
        <code>ERROR 404 : Not Found</code>
      </div>
    );
  }
}

export default NotFound;