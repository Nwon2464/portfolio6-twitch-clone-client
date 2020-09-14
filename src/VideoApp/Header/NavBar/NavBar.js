import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <nav className="navbar__">
      <div className="navbar__nav">{props.children}</div>
    </nav>
  );
};

export default NavBar;
