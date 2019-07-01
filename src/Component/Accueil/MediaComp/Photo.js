import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const ROOT_SRC = "./../../../medias/accueil/";

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoItems: this.props.infos.items
    };
  }

  render() {

    /*let test = (<img src={require("./../../../medias/horaires.webp")} alt="test" />);
    let listItem = [];
    const photos = this.state.photoList;
    for (let p in photos){
      let imageSrc = "./../../../medias/horaires.webp";//ROOT_SRC+photos[p].source;
      console.log(imageSrc);
      let image = test//<img src={require(imageSrc)} alt={photos[p].text} /> //ROOT_SRC+photos[p].source
      listItem.push(
        <CarouselItem key={p}>
          {image}
          <CarouselCaption captionHeader={photos[p].header} captionText={photos[p].text}/>
        </CarouselItem>
      );
    }*/

    let test = [];
    let listItem = [];
    const photos = this.state.photoItems;
    for (let p in photos){
      test.push(<img src={require(""+ROOT_SRC+photos[p].source)} alt={photos[p].text} />);
      /*listItem.push({
        src: require(""+ROOT_SRC+photos[p].source),
        altText: photos[p].text,
        caption: photos[p].text
      });*/
    }

    return (
      <div className="PhotoLayout">
      {test}
        <UncontrolledCarousel items={listItem}/>
      </div>
    );
  }
}

export default Photo;
