import React, { Component } from "react";

import {
  Form,
  FormGroup,
  Label,
  Input,
  ButtonToolbar,
  Button
} from "reactstrap";

const resetMail = ({
  subject: "",
  content: "",
  sendCopy: false,
  copyMail: ""
});

class MailForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.cancelMail = this.cancelMail.bind(this);

    this.state = {
      mail: resetMail
    };
  }

  handleChange(event) {
    let id = event.target.id;
    let value = (event.target.value)? event.target.value : event.target.checked;

    let newMail = Object.assign({}, this.state.mail);
    newMail[id] = value;
    
    this.setState({
      mail: newMail
    });
  }

  cancelMail() {
    this.setState({
      mail: resetMail
    });
    //TODO fermer 
  }

  render() {

    //TODO Utiliser une liste d'objets prédéfini ?

    let form = (

      <Form acceptCharset="UTF-8" action="https://usebasin.com/f/d69dea17e168" method="POST">
        <FormGroup>
          <Label>Sujet</Label>
          <Input
            id="subject"
            type="text"
            name="Sujet"
            value={this.state.subject}
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
            value={this.state.content}
            placeholder="ex : Bonjour, ..."
            onChange={this.handleChange}
          />
        </FormGroup>

        {/*<FormGroup check>
          <Label check>
            <Input
              id="sendCopy"
              type="checkbox"
              value={this.state.sendCopy}
              placeholder=""
              onChange={this.handleChange}
            />
            Recevoir une copie
          </Label>
        </FormGroup>

        (this.state.mail.sendCopy) && (<FormGroup>
          <Label>Mail</Label>
          <Input
            id="copyMail"
            type="email"
            value={this.state.copyMail}
            placeholder="mon.adresse@mail.qqch"
          />
        </FormGroup>)*/}

        <ButtonToolbar>
          <Button onClick={this.cancelMail}>Annuler</Button>
          <Button type="submit">Envoyer</Button>
        </ButtonToolbar>
      </Form>
    );

    let alert = '';

    return (
      <div>
        {form}
        {alert}
      </div>
    );
  }
}

export default MailForm;
