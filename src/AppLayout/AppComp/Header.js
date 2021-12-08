import React, { Component } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { importAll, findOne } from "../../utils/Images";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.handleLang = this.handleLang.bind(this);

    this.state = {
      isOpen: false,
      dropOpen: {},
      selectedLang: (this.props.lang) ? this.props.infos.all_lang[this.props.lang] : ""
    };
  }

  toggle(force) {
    this.setState({
      isOpen: force != null ? force : !this.state.isOpen
    });
  }

  toggleDrop(target) {
    let newDrop = Object.assign({}, this.state.dropOpen);
    newDrop[target] = !this.state.dropOpen[target];
    this.setState({
      dropOpen: newDrop
    });
  }

  handleLang(e) {
    localStorage.setItem('siteLang', e.value);
    this.setState({
      selectedLang: e
    });
    let currPath = (window.location.pathname.split("/")[2]) ? "/" + window.location.pathname.split("/")[2] : "";
    window.location.pathname = '/' + e.value + currPath;
  }

  render() {
    // MENU
    let menuList = this.props.menu;
    let menuItemsList = [];
    for (let item in menuList) {

      //s'il y a des sous menus on va boucler dessus pour les ajouter au dropdown
      if (menuList[item].sub) {
        let dropItems = [];
        for (let s in menuList[item].sub) {
          dropItems.push(
            <DropdownItem key={menuList[item].sub[s]}>
              <Link className="dropdownLinks"
                to={"/" + this.props.lang + "/" + s}
                onClick={() => this.toggle(false)}
              >
                {menuList[item].sub[s].toUpperCase()}
                </Link>
            </DropdownItem>
          );
        }
        menuItemsList.push(
          <Dropdown nav isOpen={this.state.dropOpen[item]} toggle={() => this.toggleDrop(item)} key={menuList[item].title}>
            <DropdownToggle nav>
              {menuList[item].title.toUpperCase()}
            </DropdownToggle>
            <DropdownMenu>
              {dropItems}
            </DropdownMenu>
          </Dropdown>
        );
      } else {
        menuItemsList.push(
          <NavItem key={menuList[item].title}>
            <Link
              to={"/" + this.props.lang + "/" + item}
              onClick={() => this.toggle(false)}
            >
              {menuList[item].title.toUpperCase()}
            </Link>
          </NavItem>
        );
      }
    }

    //LANG
    const allLang = this.props.infos.all_lang;
    let langList = [];
    for (let l in allLang) {
      langList.push(allLang[l]);
    }

    const images = importAll(require.context('../../medias/lang/', true, /\.(webp)$/));
    let imgFr = findOne(images, 'fr');
    let imgEn = findOne(images, 'en');
    let image = {
      'fr': <img key={'fr'} src={imgFr} alt={'fr'} style={{ height: "12px" }} />,
      'en': <img key={'en'} src={imgEn} alt={'en'} style={{ height: "12px" }} />
    }
    
    const formatOptionLabel = ({ value, label, icon }) => (
      <div style={{ display: "flex" }}>
        <div>{label}</div>
        <div style={{ marginLeft: "10px" }}>
          {image[value]}
        </div>
      </div>
    );

    let selectLang = (
      <Select
        className="selectLang"
        isSearchable={false}
        isClearable={false}
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
