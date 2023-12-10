import React from "react";  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "./AppLayout/AppLayout";
import Loading from "./Page/Loading/Loading";
import Accueil from "./Page/Accueil/Accueil";
import Presentation from "./Page/Presentation/Presentation";
import Partenaires from "./Page/Presentation/Partenaires";
import Photos from "./Page/Photos/Photos";
import Videos from "./Page/Videos/Videos";
import Tarifs from "./Page/Tarifs/Tarifs";
import Ateliers from "./Page/Ateliers/Ateliers";
import Produits from "./Page/Produits/Produits";
import Contact from "./Page/Contact/Contact";
import NotFound from "./Page/NotFound/NotFound";

/**
 * REDUX
 */
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
//import { routerMiddleware } from 'react-router-redux'
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";

import appReducer from "./redux/reducers/AppReducer";
import accueilReducer from "./redux/reducers/AccueilReducer";
import presentationReducer from "./redux/reducers/PresentationReducer";
import contactReducer from "./redux/reducers/ContactReducer";
import tarifsReducer from "./redux/reducers/TarifsReducer";
import ateliersReducer from "./redux/reducers/AteliersReducer";
import produitReducer from "./redux/reducers/ProduitsReducer";
import mediasReducer from "./redux/reducers/MediasReducer";

/**
 * CSS
 */
import "bootstrap/dist/css/bootstrap.css";
import "./Style/App.css";

/**
 * Library Font-Awesome
 */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCopyright, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faAt,
  faPhone,
  faMapMarked,
  faGlobeAfrica, 
  faTimes,
  faMars,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/fontawesome-free-brands";

library.add(faCopyright, faClock);
library.add(faAt, faPhone, faMapMarked, faGlobeAfrica, faTimes, faMars, faChartLine);
library.add(faFacebook, faInstagram);

const reducers = combineReducers({
  appReducer,
  accueilReducer,
  presentationReducer,
  tarifsReducer,
  ateliersReducer,
  produitReducer,
  contactReducer,
  mediasReducer
});

const logger = createLogger({
  level: "log"
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware, logger))
);

//const menu = {};

/**
 * App Component render
 */
const App = () => {

  const [lang, setLang] = React.useState((localStorage.getItem('siteLang'))? localStorage.getItem('siteLang') : 'fr');

  React.useEffect(() => {

    const packageJson = require("./../package.json");

    //Mise à jour des localStorage
    if (localStorage.getItem('appVersion') !== packageJson.version) {
      //mise a jour de la version
      localStorage.setItem('appVersion', packageJson.version);
      //mise a jour 
      localStorage.setItem('newsSeen', "danger");
    }

    //Mise à jour des sessionStorage
    sessionStorage.setItem('newsToggle', 'close');
    sessionStorage.setItem('displayAnnonce', 'block');

    //Mise à jour de la langue
    let currLang = "";

    //Vérification du pathname avec la langue
    //s'il n'y en a pas
    if (window.location.pathname.split("/")[1] === "") {
      //Récupération de la langue du localStorage et s'il y en a une on la met dans currLang
      let langStorage = localStorage.getItem('siteLang');
      //Sinon on met celle du navigateur et on met à jour le localStorage
      if (langStorage !== null && langStorage !== undefined && langStorage !== "") {
        currLang = langStorage;
      } else {
        currLang = navigator.language.split('-')[0];
        localStorage.setItem('siteLang', currLang);
      }
      //Puis on redirige vers le path avec la langue
      window.location.pathname = '/' + currLang;
    } else {
      //au cas ou il ne soit pas initialisé
      localStorage.setItem('siteLang', window.location.pathname.split("/")[1]);
    }
    setLang(currLang);
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <AppLayout lang={lang}>
            <Routes>
              <Route exact path="/" element={<Loading/>} />
              <Route path="/:lang/accueil" element={<Accueil/>} />
              <Route path="/:lang/presentation" element={<Presentation/>} />
              <Route path="/:lang/partenaires" element={<Partenaires/>} />
              <Route path="/:lang/photos" element={<Photos/>} />
              <Route path="/:lang/videos" element={<Videos/>} />
              <Route path="/:lang/tarifs" element={<Tarifs/>} />
              <Route path="/:lang/ateliers" element={<Ateliers/>} />
              <Route path="/:lang/produits" element={<Produits/>} />
              <Route path="/:lang/contact" element={<Contact/>} />
              <Route path="/fr" element={<Accueil/>} />
              <Route path="/en" element={<Accueil/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </AppLayout>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
