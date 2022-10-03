import React from 'react';
import { Button } from "reactstrap";
import { importAll, findOne } from "../../utils/Images";
import Images from "../../Component/Images/Images";

const Photos = (props) => {

  const [allImport, setAllImport] = React.useState({});
  const [photoList] = React.useState(props.photoList);
  const [inGalerie, setInGalerie] = React.useState(false);
  const [prevScroll, setPrevScroll] = React.useState(0);
  const [target, setTarget] = React.useState(<Images folderName="ongles" folderSize={13} />);

  React.useEffect(() => {
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
    
    //let test = importAll(require.context('../../medias/galerie/test', true, /\.(webp)$/));

    let Dermographie_réparatrice = importAll(require.context('../../medias/galerie/Dermographie réparatrice', true, /\.(webp)$/));
    let Dermographie_esthétique = importAll(require.context('../../medias/galerie/Dermographie esthétique', true, /\.(webp)$/));
    let Piercing_et_bijoux = importAll(require.context('../../medias/galerie/Piercing et bijoux', true, /\.(webp)$/));
    let Tatouage = importAll(require.context('../../medias/galerie/Tatouage', true, /\.(webp)$/));
    let Maquillage_permanent = importAll(require.context('../../medias/galerie/Maquillage permanent', true, /\.(webp)$/));
    let Maquillage_semi_permanent = importAll(require.context('../../medias/galerie/Maquillage semi-permanent', true, /\.(webp)$/));
    let Vernis_semi_permanent = importAll(require.context('../../medias/galerie/Vernis semi-permanent', true, /\.(webp)$/));
    let Make_up = importAll(require.context('../../medias/galerie/Make up', true, /\.(webp)$/));

    setAllImport({
      "Dermographie réparatrice": Dermographie_réparatrice,
      "Dermographie esthétique": Dermographie_esthétique,
      "Piercing et bijoux": Piercing_et_bijoux,
      "Tatouage": Tatouage,
      "Maquillage permanent": Maquillage_permanent,
      "Maquillage semi-permanent": Maquillage_semi_permanent,
      "Vernis semi-permanent": Vernis_semi_permanent,
      "Make up": Make_up
    });
  }, []);

  const handleSelect = (target) => {
    let windowScrollY = window.scrollY;
    window.scrollTo(0, 0);
    setInGalerie(true);
    setPrevScroll(windowScrollY);
    setTarget(<Images folderName={target.source} folderSize={target.size} allImport={allImport} />);
  }

  const handleBack = () => {
    window.scrollTo(0, prevScroll);
    setInGalerie(false);
    setPrevScroll(0);
  }
    
  let menuAlbum = [];
  for (let photo in photoList) {
    const image = findOne(allImport[photoList[photo].source], photoList[photo].size);
    menuAlbum.push(
      <div className="GalerieDiv" key={photo}>
        <h6 style={{ "textDecoration": "underline" }}>{photoList[photo].name+" ("+photoList[photo].size+")"}</h6>
        <img
          className="isBtn GalerieImg"
          src={image}
          alt={photo}
          onClick={() => handleSelect(photoList[photo])}
        />
      </div>
    );
  }
  
  let backLabel = (props.currLang === 'fr')? '< Retour' : '< Back';

  return (
    <div className="GalerieLayout Page">

      {inGalerie ? (
        <React.Fragment>
          <div>
            <Button id="dfltBackBtn" className="DfltBackBtn" onClick={() => handleBack()}>{backLabel}</Button>
            <Button id="stkyBackBtn" className="StkyBackBtn" style={{'display':'none'}} onClick={() => handleBack()}>{backLabel}</Button>
          </div>
          {target}
        </React.Fragment>
      ) : (
          <React.Fragment>
            {menuAlbum}
          </React.Fragment>
        )}
    </div>
  );
}

export default Photos;
