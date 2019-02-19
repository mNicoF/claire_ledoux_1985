import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let about = (
      <p>
        Cabinet de tatouage médical et dermographie esthétique.
        Reconstruction mammaire, camouflage de cicatrices, tricopigmentation, maquillage permanent.
      </p>
    );

    return (
      <div className="AboutLayout">
        {about}
      </div>
    );
  }
}

export default About;
