import React, { useState, useEffect, useRef } from "react";

const RenderField = (props) => {
  const anchorRef = useRef();
  const inputRef = useRef();
  const [anchorHeight, setAnchorHeight] = useState(0);
  useEffect(() => {
    const offSetWidth = anchorRef.current.offsetWidth;
    setAnchorHeight(offSetWidth);
    if (inputRef.current.name === "username") {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className="field" style={{ position: "relative" }}>
      <label>
        <a ref={anchorRef} style={{ fontSize: "1rem" }}>
          {props.label}
        </a>
      </label>
      <div>
        <input
          ref={inputRef}
          className="app__input"
          {...props.input}
          type={props.type}
          autoComplete="off"
        />
        {/* {props.meta.error} */}
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
      </div>
    </div>
  );
};

export default RenderField;
