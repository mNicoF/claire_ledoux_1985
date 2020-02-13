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

  componentDidMount() {
    this.props.loadDeviceType();
  }

  render() {
    return (
      <div>
        <Header
          infos={this.props.infos}
          lang={this.props.lang}
          menu={this.props.menu}
          setAppLang={this.props.setAppLang}
        />

        {this.props.children}

        {this.props.target === "http://www.claireledoux1985.fr/" ? (
          <Footer infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
        ) : (
            <FooterRec infos={this.props.infos} version={this.props.version} dateMaJ={this.props.dateMaJ} />
          )}
        {/* TODO a tester :*/}
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
