import React from 'react';
import createBudget from '../helpers/createBudget.js';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';

const NavBar = (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <span>Budgeteer</span>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}
          onClick={() => {
            props.hide();
          }}
        >{props.name}</NavItem>
        <NavItem eventKey={2}>log out</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;