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
      className="nav__item"
    >
      <a href="#" className="icon__button" onClick={() => setOpen(!open)}>
        {props.loggedIcon ? props.loggedIcon : props.notLoggedIcon}
      </a>

      {open && props.children}
    </div>
  );
};

export default NavItem;
