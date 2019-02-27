import React, { Component } from 'react';

class Pres extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let Pres = (
      <>
        <p>Claire Ledoux 1985 est un cabinet de tatouage médical et de dermographie esthétique, qui propose de nombreux services.
          Parmis eux vous pouvez retrouver de la reconstruction mammaire, le camouflage de cicatrices, la tricopigmentation et le maquillage permanent ou semi-permanent.</p>
      </>
    );

    return (
      <div className="PresLayout">
        <h3>La reconstruction dans la peau</h3>
        {Pres}
      </div>
    );
  }
}

export default Pres;
