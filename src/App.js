import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

/**
 * Fixed parts
 */
import Header from './AppLayout/Header/Header';
import Footer from './AppLayout/Footer/Footer';

import AnnonceTMP from './Component/AnnonceTMP/AnnonceTMP';
import Contact from './Component/Contact/Contact';

/**
 * REDUX
 */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

import { contactReducer } from './redux/reducers/ContactReducer';
/**
 * CSS
 */
import 'bootstrap/dist/css/bootstrap.css';
import './Style/App.css';

/**
 * Library Font-Awesome
 */
//import '@fortawesome/fontawesome-free'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
//import {  } from '@fortawesome/free-solid-svg-icons';

library.add(faCopyright);

const reducers = combineReducers({
  contact: contactReducer
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
      currentURL: '/'
    };
    this.handleNav = this.handleNav.bind(this);
    this.handleHistory = this.handleHistory.bind(this);
  }

  componentDidMount(){
    window.addEventListener('pushstate', this.handleHistory, false);
    window.addEventListener('popstate', this.handleHistory, false);
  }

  componentWillUnmount(){
    window.removeEventListener('pushstate', this.handleHistory);
    window.removeEventListener('popstate', this.handleHistory);
  }

  handleHistory(event){
    const fullURLSplit = window.location;

    this.setState({
      currentURL: fullURLSplit[fullURLSplit.length - 1]
    })
  }

  handleNav(event){
    const fullURLSplit = event.target.href.split('/');

    this.setState({
      currentURL: fullURLSplit[fullURLSplit.length - 1]
    })
  }

  render() {

    //const stateCurrentURL = this.state.currentURL;

    return (
      <div className="App">
        <Header/>
        <div>
          <Provider store={store}>
            <Router>
              <div>
                <div className="menuBar">
                  <Link to="/contact" activeClassName="selected" onClick={this.handleNav}>Contact</Link>
                  <Link to="/annonceTMP" activeClassName="selected" onClick={this.handleNav}>Annonce</Link>
                </div>
                <Switch>
                  <Route path="/contact" component={Contact}></Route>
                  <Route path="/annonceTMP" component={AnnonceTMP}></Route>
                </Switch>
              </div>
            </Router>
          </Provider>
        </div>
        <Footer/>
      </div>
    );

    /*return (
      <div className="App">
        <Header/>
        <div>
          <AnnonceTMP/>
        </div>
        <Footer/>
      </div>
    );*/
  }
}

App.propTypes = {
}

export default App;