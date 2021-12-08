import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "./AppComp/Header";
import Footer from "./AppComp/Footer";
import FooterRec from "./AppComp/FooterRec";
import CartCanvas from "./AppComp/CartCanvas";

import MessengerCustomerChat from 'react-messenger-customer-chat';

import "../Style/Header.css";
import "../Style/Footer.css";

class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lang: this.props.lang
    };
  }

  componentDidMount() {
    this.props.loadDeviceType();
  }

  render() {

    //ajouter les enfants que si la lang a bien été mise à jour
    let children = (this.state.lang !== null) ? this.props.children : "";

    let messengerLang = (this.state.lang === 'fr')? "fr_FR" : "en_US";

    return (
      <div>
        <Header
          infos={this.props.infos}
          lang={this.state.lang}
          menu={this.props.menu[this.state.lang]}
        />

        <CartCanvas lang={this.state.lang} />

        {children}

        {this.props.target === "http://www.claireledoux1985.fr/" ? (
          <Footer infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
        ) : (
            <FooterRec infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
          )}

        
        <MessengerCustomerChat
          appId=""
          className="fb-customerchat"
          pageId="242649823093770"
          themeColor="#37342F"
          language={messengerLang}>
        </MessengerCustomerChat>
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
