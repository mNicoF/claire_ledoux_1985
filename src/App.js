import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import AppLayout from "./AppLayout/AppLayout";
import Loading from "./Page/Loading/Loading";
import Accueil from "./Page/Accueil/Accueil";
import Presentation from "./Page/Presentation/Presentation";
import Galerie from "./Page/Galerie/Galerie";
import Videos from "./Page/Videos/Videos";
import Tarifs from "./Page/Tarifs/Tarifs";
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
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/fontawesome-free-brands";

library.add(faCopyright, faClock);
library.add(faAt, faPhone, faMapMarked, faGlobeAfrica, faTimes);
library.add(faFacebook);

const reducers = combineReducers({
  appReducer,
  accueilReducer,
  presentationReducer,
  tarifsReducer,
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
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener("pushstate", this.handleHistory, false);
    window.addEventListener("popstate", this.handleHistory, false);
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
            <AppLayout>
              <Switch>
                <Route exact path="/" component={Loading} />
                <Route path="/:lang/accueil" component={Accueil} />
                <Route path="/:lang/presentation" component={Presentation} />
                <Route path="/:lang/galerie" component={Galerie} />
                <Route path="/:lang/videos" component={Videos} />
                <Route path="/:lang/prestations" component={Tarifs} />
                <Route path="/:lang/produits" component={Produits} />
                <Route path="/:lang/contact" component={Contact} />
                <Route 
                  path="/:lang"
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
