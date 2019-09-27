import React, { Component } from "react";
import { FacebookProvider, Page } from "react-facebook";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import MailForm from './MailForm';

class Infos extends Component {
  constructor(props) {
    super(props);

    this.renderInfo = this.renderInfo.bind(this);

    this.state = {};
  }

  renderInfo(contact, device) {
    let info = "";
    switch (contact.label) {
      case "Horaires":
        info = (
          <img
            className="ContactIMG"
            src={require("../../medias/horaires.webp")}
            alt={contact.label}
          />
        );
        break;

      case "Adresse":
        info = (
          <iframe
            title={contact.label}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.308366391724!2d-0.4649403844135393!3d46.32357177912051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4807302d49a7fac7%3A0xf6504c9d332526e9!2s13+Rue+de+l&#39;Arsenal%2C+79000+Niort!5e0!3m2!1sfr!2sfr!4v1550002441007"
            width="800"
            height="600"
          />
        ); //{contact.info} />);
        break;

      case "Téléphone":
        info = (
          <img
            className="ContactIMG"
            src={require("../../medias/horaires.webp")}
            alt={contact.label}
          />
        );
        break;

      case "Email":
        info = <MailForm contact={contact} />;
        break;

      case "Facebook":
        let width = (device === "Mobile") ? "300" : "800";
        info = (
          <FacebookProvider appId={contact.label}>
            <Page
              href="https://www.facebook.com/claireledoux1985/"
              tabs="timeline"
              width={width}
            />
          </FacebookProvider>
        );
        break;

      case "Messenger":
        info = (
          <MessengerCustomerChat className="fb-customerchat"
            pageId="242649823093770" appId="">
          </MessengerCustomerChat>
        );
        break;

      case "Site web":
        info = <code>{contact.label} en cours de développement</code>;
        break;

      default:
        return;
    }
    return info;
  }

  render() {
    let infoContent = this.renderInfo(this.props.contact, this.props.device);

    return (<div className="InfoLayout">{infoContent}</div>);
  }
}

export default Infos;
