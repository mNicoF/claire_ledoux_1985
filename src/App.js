import React, { Component } from 'react';

/**
 * TODO : modify this
 */
import Header from './AppLayout/Header/Header';
import Body from './AppLayout/Body/Body';
import Footer from './AppLayout/Footer/Footer';

/**
 * CSS
 */
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

/**
 * Library Font-Awesome
 */
//import '@fortawesome/fontawesome-free'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
//import {  } from '@fortawesome/free-solid-svg-icons';
library.add(faCopyright);

/**
 * App Component render
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;