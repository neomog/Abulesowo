import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div>
          <span>
            <strong>Abulesowo</strong>
          </span>
        </div>

        <nav>
          <Link to="/">
            <Link className="active">Home</Link>
          </Link>
          <Link to="/about">About</Link>
          <Link>Request</Link>
          {/* <Link to="#">Our Blog</Link> */}
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

// const mainNav = {
//   textDecoration: "none",
// };

export default Header;
