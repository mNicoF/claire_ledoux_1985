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

  componentWillMount() {
    //met a jour la lang dans redux pour la première connection
    //avec rediraction du '/' vers /:lang
    let currLang = window.location.pathname.split("/")[1];
    if(currLang === ""){
      window.location.pathname = '/'+navigator.language.split('-')[0];
    }
    if(this.props.lang === null){
      this.props.setAppLang(currLang);
    }
    this.setState({
      lang: currLang
    });
  }

  componentDidMount() {
    this.props.loadDeviceType();
  }

  render() {
    
    //ajouter les enfants que si la lang a bien été mise à jour
    let children = (this.props.lang !== null)? this.props.children : "";
    
    return (
      <div>
        <Header
          infos={this.props.infos}
          lang={this.state.lang}
          menu={this.props.menu[this.state.lang]}
          setAppLang={this.props.setAppLang}
        />

        {children}

        {this.props.target === "http://www.claireledoux1985.fr/" ? (
          <Footer infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
        ) : (
            <FooterRec infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
          )}
          
        <MessengerCustomerChat
          className="fb-customerchat"
          pageId="242649823093770"
          themeColor="#37342F"
          language="fr_FR">
        </MessengerCustomerChat>
      </div>
    );
  }
}

AppLayout.propTypes = {
  target: PropTypes.string,
  infos: PropTypes.object,
  lang: PropTypes.string,
  menu: PropTypes.object,
  loadDeviceType: PropTypes.func,
  setAppLang: PropTypes.func
};

export default AppLayout;
