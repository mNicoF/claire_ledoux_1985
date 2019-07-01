import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Input
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleLang = this.handleLang.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle(force) {
    this.setState({
      isOpen: force != null ? force : !this.state.isOpen
    });
  }

  handleLang(e) {
    let targetLang = e.target.value;
    this.props.setAppLang(targetLang);
    console.log(window.location.pathname);
    //window.location.pathname = '/'targetLang+window.location.pathname;
  }

  render() {
    // MENU
    let menuList = this.props.menu;
    let menuItemsList = [];
    for (let item in menuList) {
      menuItemsList.push(
        <NavItem key={menuList[item]}>
          <Link
            to={/*"/"+this.props.lang+*/ "/" + item}
            onClick={() => this.toggle(false)}
          >
            {menuList[item].toUpperCase()}
          </Link>
        </NavItem>
      );
    }

    //LANG
    const langList = this.props.infos.all_lang;
    let langOptions = [];
    for (let l in langList) {
      langOptions.push(
        <option key={langList[l].key} value={langList[l].key}>
          {langList[l].value}
        </option>
      );
    }
    let selectLang = (
      <Input
        type="select"
        name="lang"
        value={this.props.lang}
        className="selectLang"
        onChange={this.handleLang}
      >
        {langOptions}
      </Input>
    );

    return (
      <div>
        <header className="App-header theme">
          <h1 className="App-title">CLAIRE LEDOUX</h1>

          <Navbar light expand="md">
            <NavbarToggler onClick={() => this.toggle()} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>{menuItemsList}</Nav>
            </Collapse>
            {/*selectLang*/}
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Header;
