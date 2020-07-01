import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

import { appReducer } from "./redux/reducers/AppReducer";
import { accueilReducer } from "./redux/reducers/AccueilReducer";
import { presentationReducer } from "./redux/reducers/PresentationReducer";
import { contactReducer } from "./redux/reducers/ContactReducer";
import { tarifsReducer } from "./redux/reducers/TarifsReducer";
import { ateliersReducer } from "./redux/reducers/AteliersReducer";
import { produitReducer } from "./redux/reducers/ProduitsReducer";
import { mediasReducer } from "./redux/reducers/MediasReducer";

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
import { faFacebook } from "@fortawesome/fontawesome-free-brands";

library.add(faCopyright, faClock);
library.add(faAt, faPhone, faMapMarked, faGlobeAfrica, faTimes, faMars, faChartLine);
library.add(faFacebook);

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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: (localStorage.getItem('siteLang'))? localStorage.getItem('siteLang') : 'fr'
    };
  }

  componentDidMount() {
    window.addEventListener("pushstate", this.handleHistory, false);
    window.addEventListener("popstate", this.handleHistory, false);

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

    this.setState({
      lang: currLang
    });

  }

  componentWillUnmount() {
    window.removeEventListener("pushstate", this.handleHistory);
    window.removeEventListener("popstate", this.handleHistory);
  }

  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <AppLayout lang={this.state.lang}>
              <Switch>
                <Route exact path="/" component={Loading} />
                <Route path="/:lang/accueil" component={Accueil} />
                <Route path="/:lang/presentation" component={Presentation} />
                <Route path="/:lang/partenaires" component={Partenaires} />
                <Route path="/:lang/photos" component={Photos} />
                <Route path="/:lang/videos" component={Videos} />
                <Route path="/:lang/tarifs" component={Tarifs} />
                <Route path="/:lang/ateliers" component={Ateliers} />
                <Route path="/:lang/produits" component={Produits} />
                <Route path="/:lang/contact" component={Contact} />
                <Route 
                  exact path="/:lang"
                  render={props =>
                    props.match.params.lang === 'fr' || props.match.params.lang === 'en' ? (
                      <Accueil />
                    ) : (
                      <NotFound />
                    )
                  }
                />
                {/*<Redirect from="*" to="/404"/>*/}
                <Route component={NotFound} />
              </Switch>
            </AppLayout>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
