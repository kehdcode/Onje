import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { FaHome, } from "react-icons/fa";



const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="">
    <Navbar color="" light expand="md" className="success">
      <NavbarBrand href="/">Oonje</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink href="/"> <FaHome /> Home | </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="menu">Menu</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="outlet">Our Outlets</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="contact">Our Contact</NavLink>
          </NavItem>
        </Nav>
        <NavbarText>My Orders</NavbarText>
      </Collapse>
    </Navbar>
    </div>
  );
}

export default Navigation;