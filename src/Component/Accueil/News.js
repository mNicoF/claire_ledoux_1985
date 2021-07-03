import React, { Component } from 'react';
import { Jumbotron, Badge } from 'reactstrap';

class News extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: (sessionStorage.getItem('newsToggle') === "close") ? false : true,
      badgeColor: localStorage.getItem('newsSeen'),
      title: this.props.news.title,
      news: this.props.news.content
    };
  }

  toggle() {
    let open = !this.state.isOpen;
    if (open) {
      sessionStorage.setItem('newsToggle', "open");
    } else {
      sessionStorage.setItem('newsToggle', "close");
    }

    if (this.state.badgeColor === 'danger') {
      localStorage.setItem('newsSeen', 'secondary');
      this.setState({
        isOpen: open,
        badgeColor: 'secondary'
      })
    } else {
      this.setState({
        isOpen: open
      });
    }

  }

  render() {

    let newsContent = [];
    const news = this.state.news;

    if(news[0].text !== "") {
      let jumboContent = [];
      for (let n in news) {
        jumboContent.push(<hr key={"hr_" + n} className="my-2" />);
        let newsTxt = [];
        if (news[n].url) {
          newsTxt.push(
          <p key={"p_" + n} className="lead">
            {news[n].text.split('@link')[0]}
            <a href={news[n].url} target="_blank" rel="noopener noreferrer">{news[n].link}</a>
            {news[n].text.split('@link')[1]}
          </p>);
        } else {
          newsTxt.push(<p key={"p_" + n} className="lead">{news[n].text}</p>);
        }
        jumboContent.push(newsTxt);
      }

      newsContent = (
        <Jumbotron>
          <h3 className="NewsHeader" onClick={() => this.toggle()}>{this.state.title} <Badge color={this.state.badgeColor}>{this.state.news.length}</Badge></h3>
          {this.state.isOpen && jumboContent}
        </Jumbotron>
      );

    }
    

    return (
      <div className="NewsLayout">
        {newsContent}
      </div>
    );
  }
}

export default News;
