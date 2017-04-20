import React from 'react';
import createBudget from '../helpers/createBudget.js';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Budgeteer</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavDropdown eventKey={3} title="Menu" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} onClick={() => {
            let gas = prompt('initial gas amount');
            let food = prompt('initial food amount');
            let other = prompt('initial other amount');
            let values = {
              gas: gas,
              food: food,
              other: other
            };
            createBudget(values, props.setAmount);
          }}>create new Budget</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>log out</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;