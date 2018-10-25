import React, { Component } from 'react';

import Header from './AppLayout/Header/Header';
import Body from './AppLayout/Body/Body';
import Footer from './AppLayout/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.css';
//import 'font-awesome/css/font-awesome.css';

import './App.css';

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