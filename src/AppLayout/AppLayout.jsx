import React from "react";
import PropTypes from "prop-types";

import Header from "./AppComp/Header";
import Footer from "./AppComp/Footer";
import FooterRec from "./AppComp/FooterRec";
//import CartCanvas from "./AppComp/CartCanvas";

import MessengerCustomerChat from 'react-messenger-customer-chat';

import "../Style/Header.css";
import "../Style/Footer.css";

const AppLayout = (props) => {

  const [lang] = React.useState(props.lang);

  React.useEffect(() => {
    props.loadDeviceType();
  });

  //ajouter les enfants que si la lang a bien été mise à jour
  let children = (lang !== null) ? props.children : "";

  let messengerLang = (lang === 'fr')? "fr_FR" : "en_US";

  return (
    <div>
      <Header
        infos={props.infos}
        lang={lang}
        menu={props.menu[lang]}
      />

      {/*<CartCanvas lang={this.state.lang} />*/}

      {children}

      {props.target === "http://www.claireledoux1985.fr/" ? (
        <Footer infos={props.infos} version={props.version} dateMaJ={props.dateMaJ} />
      ) : (
          <FooterRec infos={props.infos} version={props.version} dateMaJ={props.dateMaJ} />
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

AppLayout.propTypes = {
  target: PropTypes.string,
  infos: PropTypes.object,
  menu: PropTypes.object,
  loadDeviceType: PropTypes.func
};

export default AppLayout;
