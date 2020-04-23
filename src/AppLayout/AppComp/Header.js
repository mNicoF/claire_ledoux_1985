import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleLang = this.handleLang.bind(this);

    this.state = {
      isOpen: false,
      selectedLang: (this.props.lang)? this.props.infos.all_lang[this.props.lang] : ""
    };
  }

  toggle(force) {
    this.setState({
      isOpen: force != null ? force : !this.state.isOpen
    });
  }

  handleLang(e) {
    localStorage.setItem('siteLang', e.value);
    this.setState({
      selectedLang: e
    });
    let currPath = (window.location.pathname.split("/")[2])? "/"+window.location.pathname.split("/")[2] : "";
    window.location.pathname = '/' + e.value + currPath;
  }

  render() {
    // MENU
    let menuList = this.props.menu;
    let menuItemsList = [];
    for (let item in menuList) {
      menuItemsList.push(
        <NavItem key={menuList[item]}>
          <Link
            to={"/" + this.props.lang + "/" + item}
            onClick={() => this.toggle(false)}
          >
            {menuList[item].toUpperCase()}
          </Link>
        </NavItem>
      );
    }

    //LANG
    const allLang = this.props.infos.all_lang;
    let langList = [];
    for (let l in allLang) {
      langList.push(allLang[l]);
    }

    const formatOptionLabel = ({ value, label, icon }) => (
      <div style={{ display: "flex" }}>
        <div>{label}</div>
        <div style={{ marginLeft: "10px" }}>
          <img key={icon} src={require('../../medias/lang/' + icon)} alt={icon} style={{ height: "12px" }}/>
        </div>
      </div>
    );

    let selectLang = (
      <Select
        className="selectLang"
        value={this.state.selectedLang}
        onChange={this.handleLang}
        options={langList}
        formatOptionLabel={formatOptionLabel}
      />
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
            {selectLang}
          </Navbar>
        </header>
      </div>
    );
  }
}

export default Header;
