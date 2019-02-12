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
          <div className="NotFoundH3">Error 404</div>
          <div>La page que vous cherchez n'existe pas</div>
          <div>Revenez sur le site :  
            <a className="NotFoundBtn" rel="noopener noreferrer" href="http://www.claireledoux1985.fr/">CLAIRE LEDOUX 1985</a>
          </div>
      </div>
    );
  }
}

export default NotFound;