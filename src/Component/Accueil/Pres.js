import React from 'react';

const Pres = (props) => {
    
  const title= (props.lang === 'fr')? "Présentation" : "Presentation"
  
  return (
    <div className="PresLayout">
      <h3>{title}</h3>
      <div className="PresContent">
        {props.presentation.resume}
      </div>
    </div>
  );
}

export default Pres;
