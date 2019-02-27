import React, { Component } from 'react';

import '../../Style/Presentation.css';

class Presentation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      presentation: this.props.presentation
    };
  }

  render() {

    let pres = this.state.presentation;
    let presentation = [];

    for(let p in pres){
      switch(pres[p].type) {
        case 'paragraphe':
          presentation.push(<p key={p}>{pres[p].value}</p>);
          break;
        case 'image':
          presentation.push(<img key={p} src={require("../../medias/"+pres[p].value+".webp")} alt={pres[p].value} />);
          break;
        default:
          break;
      }

    }
    
    return (
      <div className="PresentationLayout Page">
        <h2>La reconstruction dans la peau</h2>
        {presentation}
      </div>
    );
  }
}

export default Presentation;
