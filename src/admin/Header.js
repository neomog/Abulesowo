import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" light className="header" id="header">
        <NavbarBrand href="/" className="mr-auto">
          <strong>Abulesowo</strong>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="item-hover">
              <NavLink id="nav-color" href="/admin">
                Dashboard
              </NavLink>
            </NavItem>
            <NavItem className="item-hover">
              <NavLink id="nav-color" href="/create">
                Add Property
              </NavLink>
            </NavItem>
            <NavItem className="item-hover">
              <NavLink id="nav-color" href="/login">
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

// const mainNav = {
//   textDecoration: "none",
// };

export default Header;
