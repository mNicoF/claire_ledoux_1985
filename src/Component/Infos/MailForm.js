import React, { Component } from "react";

import {
  Form,
  FormGroup,
  Label,
  Input,
  ButtonToolbar,
  Button
} from "reactstrap";

const RESET_MAIL = ({
  email: "",
  subject: "",
  content: "",
  sendCopy: false
});

class MailForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.cancelMail = this.cancelMail.bind(this);

    this.state = {
      mail: RESET_MAIL
    };
  }

  handleChange(event) {
    let id = event.target.id;
    let value = (event.target.value) ? event.target.value : event.target.checked;

    let newMail = Object.assign({}, this.state.mail);
    newMail[id] = value;

    this.setState({
      mail: newMail
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.sendMail(this.state.mail);
  }

  cancelMail() {
    this.setState({
      mail: RESET_MAIL
    });
    //TODO fermer ?
  }

  render() {

    let form = (

      <Form
        acceptCharset="UTF-8"
        action="#" //"https://usebasin.com/f/d69dea17e168"
        method="POST"
        className="MailForm">

        <FormGroup>
          <Label>Adresse email</Label>
          <Input
            id="email"
            type="text"
            name="Email"
            value={this.state.mail.email}
            placeholder="ex : marcel.dupont@exemple.com"
            onChange={this.handleChange}
          />
        </FormGroup>

        {/*<FormGroup>
          <Label>
            Recevoir une copie
            <Input
              id="sendCopy"
              type="checkbox"
              value={this.state.mail.sendCopy}
              placeholder=""
              style={{ marginLeft: '20px' }}
              onChange={this.handleChange}
            />
          </Label>
        </FormGroup>
        */}

        <FormGroup>
          <Label>Sujet</Label>
          <Input
            id="subject"
            type="text"
            name="Sujet"
            value={this.state.mail.subject}
            placeholder="ex : Demande d'information"
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Texte</Label>
          <Input
            id="content"
            type="textarea"
            name="Contenu"
            value={this.state.mail.content}
            placeholder="ex : Bonjour, ..."
            onChange={this.handleChange}
          />
        </FormGroup>

        <ButtonToolbar className="MailToolbar">
          <Button color="danger" onClick={this.cancelMail}>Annuler</Button>
          <Button color="success" type="submit" disabled={this.state.mail.email === ""} onClick={e => this.handleFormSubmit(e)}>Envoyer</Button>
        </ButtonToolbar>
      </Form>
    );

    let alert = '';

    return (
      <div className="MailFormLayout">
        {alert}
        {form}
      </div>
    );
  }
}

export default MailForm;
