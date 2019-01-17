import React, { Component/*, PropTypes*/ } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    
    this.state = {
      isOpen: false
    };
  }

  toggle(force) {
    this.setState({
      isOpen: (force != null)? force : !this.state.isOpen
    });
  }

  render() {

    let menuList = this.props.app.menu;
    let menuItemsList = [];
    for(let item in menuList){
      menuItemsList.push(
        <NavItem key={menuList[item]}>
          <Link to={"/"+menuList[item]} onClick={() => this.toggle(false)}>{menuList[item].toUpperCase()}</Link>
        </NavItem>
      )
    }

    return (
      <div>
        <header className="App-header theme">
          <h1 className="App-title">CLAIRE LEDOUX</h1>

          <Navbar light expand="md">
            <NavbarToggler onClick={() => this.toggle()} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                {menuItemsList}
              </Nav>
            </Collapse>
          </Navbar>

        </header>
      </div>
    );
  }
}

Header.propTypes = {
  //app: PropTypes.object
}

export default Header;
