import React, { Component } from 'react';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {

    let news = "News"

    return (
      <div className="NewsLayout">
        {news}
      </div>
    );
  }
}

export default News;
