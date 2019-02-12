import React, { Component } from 'react';

class GenericTag extends Component {
  constructor(props) {
    super(props);
    
    this.setTag = this.setTag.bind(this);

    this.state = {
      label: this.props.label,
      value: this.props.value,
      type: this.props.type,
      classN: Object.assign([], this.props.classN)
    };
  }

  setTag(label, value, type, classN) {
    const cName = (classN)? classN : "";
    let tag = (<></>);
    switch(type) {
      case 'link':
        tag = (<a className={cName} rel="noopener noreferrer" target="_blank" href={value}>{label}</a>);
        break;
      case 'mail':
        tag = (<a className={cName} rel="noopener noreferrer" href={"mailto:"+value}>{label}</a>);
        break;
      case 'phone':
        tag = (<a className={cName} rel="noopener noreferrer" href={"tel:"+value}>{label}</a>);
        break;
      case 'text':
        tag = (<span className={cName}>{label}</span>);
        break;
      default:
        return;
    }
    return tag;
  }

  render() {

    let tag = this.setTag(this.state.label, this.state.value, this.state.type, this.state.classN);

    return (
      <>
        {tag}
      </>
    );
  }
}

export default GenericTag;
