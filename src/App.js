import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

/**
 * Fixed parts
 */
import Header from './AppLayout/Header/Header';
import Footer from './AppLayout/Footer/Footer';

import Accueil from './Page/Accueil/Accueil';
//TODO: optimiser le chargement des pages ?
import Presentation from './Page/Presentation/Presentation';
import Galerie from './Page/Galerie/Galerie';
import Tarifs from './Page/Tarifs/Tarifs';
import Contact from './Page/Contact/Contact';
import NotFound from './Page/NotFound/NotFound';

/**
 * REDUX
 */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
//import { routerMiddleware } from 'react-router-redux'
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import { appReducer } from './redux/reducers/AppReducer';
import { contactReducer } from './redux/reducers/ContactReducer';
import { tarifsReducer } from './redux/reducers/TarifsReducer';

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
  tarifsReducer,
  contactReducer
});

const logger = createLogger({
  level: 'log'
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware,logger)));

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
                {/* //TODO: construire les routes en bouclant comme le menu dans le header
                Faire en sorte que le / monte un autre composant qui redirige sur /accueil ?*/}
                <Route exact path="/" component={Accueil}/>
                <Route exact path="/" component={Presentation}/>
                <Route exact path="/" component={Galerie}/>
                <Route exact path="/" component={Tarifs}/>
                <Route exact path="/" component={Contact}/>

                <Route path="/accueil" component={Accueil}></Route>
                <Route path="/presentation" component={Presentation}></Route>
                <Route path="/galerie" component={Galerie}></Route>
                <Route path="/prestations" component={Tarifs}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/404" component={NotFound}/>
                <Route component={NotFound}/>
                <Redirect from="/" to="/accueil"/>
              </Switch>
              <Footer/>
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