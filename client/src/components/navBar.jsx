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
        <NavItem>{props.username}</NavItem>
        <NavItem eventKey={1}
          onClick={() => {
            props.hide();
          }}
        >{props.name}</NavItem>
        <NavItem eventKey={2}
          onClick={() => {
            props.setAmount({gas: '0', food: '0', other: '0'});
            props.setUsername(null);
            props.signInHide();
          }}
        >log out</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;