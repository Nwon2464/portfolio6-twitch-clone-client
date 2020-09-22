import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="app-flex-grow-1 app-flex app-pd-l-05 app-relative app-full-height app-align-items-stretch">
      {props.children}
    </div>
  );
};

export default NavBar;
