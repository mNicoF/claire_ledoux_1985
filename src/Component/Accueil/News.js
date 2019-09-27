import React, { Component } from 'react';
import { Jumbotron, Badge } from 'reactstrap';

class News extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      title: this.props.news.title,
      news: this.props.news.content
    };
  }

  toggle(force) {
    this.setState({
      isOpen: (force != null) ? force : !this.state.isOpen
    });
  }

  render() {

    const news = this.state.news;
    let jumboContent = [];
    for (let n in news) {
      jumboContent.push(<hr key={"hr_" + n} className="my-2" />);
      jumboContent.push(<p key={"p_" + n} className="lead">{news[n]}</p>);
    }

    return (
      <div className="NewsLayout">
        <Jumbotron>
          <h3 className="NewsHeader" onClick={() => this.toggle()}>{this.state.title} <Badge color="danger">{this.state.news.length}</Badge></h3>
          {this.state.isOpen && jumboContent}
        </Jumbotron>
      </div>
    );
  }
}

export default News;
