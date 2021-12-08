import React, { Component } from 'react';
import { Button } from "reactstrap";
import { importAll, findOne } from "../../utils/Images";
import Images from "../../Component/Images/Images";

class Photos extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.state = {
      allImport: {},
      photoList: this.props.photoList,
      inGalerie: false,
      prevScroll: 0,
      target: <Images folderName="ongles" folderSize={13} />
    };
  }

  componentDidMount() {
    window.onscroll = function() {
      let dfltBackBtn = document.getElementById('dfltBackBtn');
      let stkyBackBtn = document.getElementById('stkyBackBtn');
      if(dfltBackBtn){
        if(dfltBackBtn.offsetTop < window.pageYOffset){
          dfltBackBtn.style.display = "hidden";
          stkyBackBtn.style.display = "block";
        } else {
          dfltBackBtn.style.display = "block";
          stkyBackBtn.style.display = "none";
        }
      }
    }

    let Dermographie_réparatrice = importAll(require.context('../../medias/galerie/Dermographie réparatrice', true, /\.(webp)$/));
    let Dermographie_esthétique = importAll(require.context('../../medias/galerie/Dermographie esthétique', true, /\.(webp)$/));
    let Tatouage = importAll(require.context('../../medias/galerie/Tatouage', true, /\.(webp)$/));
    let Maquillage_permanent = importAll(require.context('../../medias/galerie/Maquillage permanent', true, /\.(webp)$/));
    let Maquillage_semi_permanent = importAll(require.context('../../medias/galerie/Maquillage semi-permanent', true, /\.(webp)$/));
    let Vernis_semi_permanent = importAll(require.context('../../medias/galerie/Vernis semi-permanent', true, /\.(webp)$/));
    
    this.setState({
      allImport: {
        "Dermographie réparatrice": Dermographie_réparatrice,
        "Dermographie esthétique": Dermographie_esthétique,
        "Tatouage": Tatouage,
        "Maquillage permanent": Maquillage_permanent,
        "Maquillage semi-permanent": Maquillage_semi_permanent,
        "Vernis semi-permanent": Vernis_semi_permanent
      }
    });
  }

  handleSelect(target) {
    let windowScrollY = window.scrollY;
    window.scrollTo(0, 0);
    this.setState({
      inGalerie: true,
      prevScroll: windowScrollY,
      target: <Images folderName={target.source} folderSize={target.size} allImport={this.state.allImport} />
    })
  }

  handleBack() {
    window.scrollTo(0, this.state.prevScroll);
    this.setState({
      prevScroll: 0,
      inGalerie: false
    })
  }

  render() {
    
    let menuAlbum = [];
    for (let photo in this.state.photoList) {
      const image = findOne(this.state.allImport[this.state.photoList[photo].source], this.state.photoList[photo].size);
      menuAlbum.push(
        <div className="GalerieDiv" key={photo}>
          <h6 style={{ "textDecoration": "underline" }}>{this.state.photoList[photo].name+" ("+this.state.photoList[photo].size+")"}</h6>
          <img
            className="isBtn GalerieImg"
            src={image}
            alt={photo}
            onClick={() => this.handleSelect(this.state.photoList[photo])}
          />
        </div>
      );
    }
    
    let backLabel = (this.props.currLang === 'fr')? '< Retour' : '< Back';

    return (
      <div className="GalerieLayout Page">

        {this.state.inGalerie ? (
          <React.Fragment>
            <div>
              <Button id="dfltBackBtn" className="DfltBackBtn" onClick={() => this.handleBack()}>{backLabel}</Button>
              <Button id="stkyBackBtn" className="StkyBackBtn" style={{'display':'none'}} onClick={() => this.handleBack()}>{backLabel}</Button>
            </div>
            {this.state.target}
          </React.Fragment>
        ) : (
            <React.Fragment>
              {menuAlbum}
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default Photos;
