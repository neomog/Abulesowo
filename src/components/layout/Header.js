import React, { useState } from "react";
// import RequestForm from "../pages/requestform/RequestForm";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

// import { Link } from "react-router-dom";
// import ModalApp from "../pages/requestform/Modal";
const Header = () => {
  // const [show, setShow] = useState(false);
  // const [hamburger, setHamburger] = useState(false);

  // const openModal = () => {
  //   setShow(true);
  // };
  // const close = () => {
  //   setShow(false);
  //   console.log("hey");
  // };

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light className="header" id="mr-auto">
        <NavbarBrand href="/" className="mr-auto">
          <strong>Abulesowo</strong>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="item-hover">
              <NavLink id="nav-color" href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="item-hover">
              <NavLink id="nav-color" href="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem className="item-hover">
              <NavLink id="nav-color" href="/contact">
                Contact Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );

  // const handleNav = () => {
  //   setHamburger(!hamburger);
  // };
  // return (
  //   <header>
  //     <div className="header">
  //       <div>
  //         <span>
  //           <strong>Abulesowo</strong>
  //         </span>
  //       </div>

  //       <button className="nav-ham" onClick={handleNav}>
  //         <span className="nav-ham-icon"></span>
  //         <span className="nav-ham-icon"></span>
  //         <span className="nav-ham-icon"></span>
  //       </button>

  //       <nav className="top-nav nav-links" id="links">
  //         <Link to="/" className="active">
  //           Home
  //         </Link>
  //         <Link to="/about">About</Link>
  //         {/* <Link onClick={openModal}>Request</Link> */}
  //         {/* <a href="#">Our Blog</a> */}
  //         <Link to="/contact">Contact Us</Link>
  //       </nav>
  //     </div>

  //     <ModalApp show={show} close={close} />
  //   </header>
  // );
};

// const mainNav = {
//   textDecoration: "none",
// };

export default Header;
