import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
    <Navbar color="success" light expand="md" className="success">
      <NavbarBrand href="/">Oonje</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="//">Our Outlets</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>My Orders</NavbarText>
      </Collapse>
    </Navbar>
    </div>
  );
}

export default Navigation;