import React, { useState } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <div className="">
      <Navbar color="light" light expand="md" className="success">
        <NavbarBrand href="/">Oonje</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Menu</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Our Resturants</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>My Orders</NavbarText>
        </Collapse>
      </Navbar>
      </div>
  
  );
}
export default App;
