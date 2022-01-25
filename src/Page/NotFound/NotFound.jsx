import React from 'react';

import '../../Style/NotFound.css';

const NotFound = () => {

  return (
    <div className="NotFoundLayout Page">
        <div className="NotFoundH3">Error 404</div>
        <div>La page que vous cherchez n'existe pas</div>
        <div>
          <a className="NotFoundBtn" rel="noopener noreferrer" href="http://www.claireledoux1985.fr/">Retour au site</a>
        </div>
    </div>
  );
}

export default NotFound;