import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "./AppComp/Header";
import Footer from "./AppComp/Footer";
import FooterRec from "./AppComp/FooterRec";

import MessengerCustomerChat from 'react-messenger-customer-chat';

import "../Style/Header.css";
import "../Style/Footer.css";

class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  UNSAFE_componentWillMount() {    

    //Mise à jour des localStorage
    if(localStorage.getItem('appVersion') !== this.props.version){
      //mise a jour de la version
      localStorage.setItem('appVersion', this.props.version);
      //mise a jour 
      localStorage.setItem('newsSeen', "danger");
    }

    //Mise à jour des sessionStorage
    sessionStorage.setItem('newsToggle', 'close');
    sessionStorage.setItem('displayAnnonce', 'block');

    //Mise à jour de la langue
    let currLang = "";
    //Récupération de la langue du localStorage et s'il y en a une on la met dans currLang
    let langStorage = localStorage.getItem('siteLang');
    //Sinon on met celle du navigateur et on met à jour le localStorage
    if(langStorage !== null && langStorage !== undefined && langStorage !== ""){
      currLang = langStorage;
    } else {
      currLang = navigator.language.split('-')[0];
      localStorage.setItem('siteLang', currLang);
    }

    //Vérification du pathname avec la langue, si vide on redirige vers /currLang
    if(window.location.pathname.split("/")[1] === ""){
      window.location.pathname = '/' + currLang;
    }
  }

  componentDidMount() {
    this.props.loadDeviceType();
  }

  render() {
    
    //ajouter les enfants que si la lang a bien été mise à jour
    let children = (localStorage.getItem('siteLang') !== null)? this.props.children : "";
    
    return (
      <div>
        <Header
          infos={this.props.infos}
          lang={localStorage.getItem('siteLang')}
          menu={this.props.menu[localStorage.getItem('siteLang')]}
        />

        {children}

        {this.props.target === "http://www.claireledoux1985.fr/" ? (
          <Footer infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
        ) : (
            <FooterRec infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
          )}
          
        {/*<MessengerCustomerChat
          appId=""
          className="fb-customerchat"
          pageId="242649823093770"
          themeColor="#37342F"
          language="fr_FR">
        </MessengerCustomerChat>*/}
      </div>
    );
  }
}

AppLayout.propTypes = {
  target: PropTypes.string,
  infos: PropTypes.object,
  menu: PropTypes.object,
  loadDeviceType: PropTypes.func
};

export default AppLayout;
