import React, { useState, useEffect, useRef } from "react";
const RenderField = (props) => {
  const anchorRef = useRef();
  const inputRef = useRef();
  const [anchorHeight, setAnchorHeight] = useState(0);
  useEffect(() => {
    const offSetWidth = anchorRef.current.offsetWidth;
    setAnchorHeight(offSetWidth);
  }, []);
  // useEffect(() => {
  //   if (inputRef.current.name === "username") {
  //     inputRef.current.focus();
  //   }
  // }, []);
  //props.meta.touched =>"app__input"
  //
  //
  //
  const className = `app__input ${
    props.meta.touched && props.meta.error && "app__danger"
  }`;
  return (
    <div className="field" style={{ position: "relative" }}>
      <label>
        <a ref={anchorRef} style={{ fontSize: "1rem" }}>
          {props.label}
        </a>
      </label>
      <div>
        <input
          autoFocus={props.autoFocus}
          // ref={inputRef}
          className={className}
          {...props.input}
          type={props.type}
          autoComplete="off"
        />
        {props.meta.touched && props.meta.error && (
          <span
            style={{
              width: `${props.label === "Month" ? "115px" : ""}`,
              left: `calc(${anchorHeight}px + 2px)`,
              position: "absolute",
              color: "red",
              top: 0,
              fontSize: "1rem",
            }}
          >
            {props.meta.error}
          </span>
        )}
        {props.input.name === "username" && props.meta.active && (
          <div className="position__abs alarm__username">{`Usernames must be between 4 and 30 characters😒`}</div>
        )}
        {props.input.name === "password" && props.meta.active && (
          <div className="position__abs alarm__password">{`Passwords must be at least 8 characters long😒`}</div>
        )}
      </div>
    </div>
  );
};
export default RenderField;
