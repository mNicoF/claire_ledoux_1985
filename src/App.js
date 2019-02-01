import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/**
 * Fixed parts
 */
import Header from './AppLayout/Header/Header';
import Footer from './AppLayout/Footer/Footer';

import Accueil from './Page/Accueil/Accueil';
//TODO: optimiser le chargement des pages
//import Presentation 
//import Galerie
import Tarifs from './Page/Tarifs/Tarifs';
import Contact from './Page/Contact/Contact';

/**
 * REDUX
 */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import { appReducer } from './redux/reducers/AppReducer';
import { contactReducer } from './redux/reducers/ContactReducer';

/**
 * CSS
 */
import 'bootstrap/dist/css/bootstrap.css';
import './Style/App.css';

/**
 * Library Font-Awesome
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
//import {  } from '@fortawesome/free-solid-svg-icons';

library.add(faCopyright);

const reducers = combineReducers({
  appReducer,
  contactReducer
});

const logger = createLogger({
  level: 'log'
})

const store = createStore(reducers, applyMiddleware(logger));

/**
 * App Component render
 */
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  componentDidMount(){
    window.addEventListener('pushstate', this.handleHistory, false);
    window.addEventListener('popstate', this.handleHistory, false);
  }

  componentWillUnmount(){
    window.removeEventListener('pushstate', this.handleHistory);
    window.removeEventListener('popstate', this.handleHistory);
  }

  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <>
              <Header/>
              <Switch>
                {/* //TODO: construire les routes en bouclant comme le menu dans le header */}
                <Route path="/accueil" component={Accueil}></Route>
                {/*<Route path="/presentation" component={Presentation}></Route>
                <Route path="/galerie" component={Galerie}></Route>*/}
                <Route path="/prestations" component={Tarifs}></Route>
                <Route path="/contact" component={Contact}></Route>
                {/* //TODO: redirect juste '/' sur /accueil et le reste sur un 404 */}
                <Redirect path="*" to="/accueil"/>
              </Switch>
              <Footer rec={true}/>
            </>
          </Router>
        </Provider>
      </div>
    );
  }
}

App.propTypes = {
}

export default App;