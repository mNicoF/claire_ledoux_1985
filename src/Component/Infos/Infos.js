import React from "react";
import MailForm from './MailForm';

const Infos = (props) => {

  const renderInfo = (contact, device) => {
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

      case "Opening hours":
        info = (
          <img
            className="ContactIMG"
            src={require("../../medias/schedule.webp")}
            alt={contact.label}
          />
        );
        break;

      case "Adresse":
        info = (
          <iframe
            title={contact.label}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.193591575366!2d-0.444245384589572!3d46.34570208221204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480731dfb88de69b%3A0xdec419cbbd57a2d8!2sClaire%20Ledoux%201985!5e0!3m2!1sfr!2sfr!4v1609754993954!5m2!1sfr!2sfr"
            width="800"
            height="600"
          />
        );
        break;

      case "Address":
        info = (
          <iframe
            title={contact.label}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.193591575366!2d-0.444245384589572!3d46.34570208221204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480731dfb88de69b%3A0xdec419cbbd57a2d8!2sClaire%20Ledoux%201985!5e0!3m2!1sfr!2sfr!4v1609754993954!5m2!1sfr!2sfr"
            width="800"
            height="600"
          />
        );
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
        info = <MailForm contact={contact} sendMail={this.props.sendMail}/>;
        break;

      case "Facebook":
        let width = (device === "mobile") ? "300" : "800";
        /*
        <FacebookProvider appId="242649823093770">
            <Page
              href="https://www.facebook.com/claireledoux1985/"
              tabs="timeline"
              width={width}
            />
          </FacebookProvider>
        */

        info = (
          <div className="fb-page"
            data-href="https://www.facebook.com/claireledoux1985/"
            data-tabs="timeline"
            data-width={width}
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/claireledoux1985/" className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/claireledoux1985/">Claire Ledoux 1985 / Maquillage Permanent</a>
            </blockquote>
          </div>
        );


        /*info = (
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fclaireledoux1985%2F&tabs=timeline&appId='242649823093770'&SameSite='none"
            width="340"
            height="500"
            style={{'border':'none','overflow':'hidden'}}
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media">

          </iframe>
        );*/
        break;

      case "Site web":
        info = <code>{contact.label} en cours de développement</code>;
        break;

      default:
        return;
    }
    return info;
  }

  const infoContent = renderInfo(props.contact, props.device);

  return (<div className="InfoLayout">{infoContent}</div>);

}

export default Infos;