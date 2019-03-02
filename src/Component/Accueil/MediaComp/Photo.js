import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

//const ROOT_SRC = "./../../../medias/accueil/";

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: this.props.infos.items
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

    //let srcStr = "./../../../medias/horaires.webp";
    let listItem = [];
    const photos = this.state.photoList;
    for (let p in photos){
      listItem.push({
        src: require("./../../../medias/horaires.webp"),
        altText: photos[p].text,
        caption: photos[p].text
      });
    }

    return (
      <div className="PhotoLayout">
        <UncontrolledCarousel items={listItem}/>
      </div>
    );
  }
}

export default Photo;
