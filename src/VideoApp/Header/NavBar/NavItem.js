import React, { useRef, useEffect, useState } from "react";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    const dropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(!open);
      }
    };
    if (open) {
      window.addEventListener("click", dropdown);
    }
    return () => {
      window.removeEventListener("click", dropdown);
    };
  }, [open]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={dropdownRef}
      className="app-flex app-justify-content-center app-align-items-center"
    >
      <button
        id="user"
        className="app-cursor-pointer app-inline-flex app-align-items-center app-align-middle app-relative app-justify-content-center"
        onClick={() => setOpen(!open)}
      >
        <div style={{ width: "2.5rem", height: "2.5rem" }}>
          {props.loggedIcon ? props.loggedIcon : props.notLoggedIcon}
        </div>
      </button>

      {open && props.children}
    </div>
  );
};

export default NavItem;
