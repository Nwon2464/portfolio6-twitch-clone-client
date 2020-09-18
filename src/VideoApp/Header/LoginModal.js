import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import { Field, reduxForm } from "redux-form";
import { SubmissionError } from "redux-form";
import "./LoginModal.css";
import history from "../history";
const LoginModal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });
  const open = () => {
    setDisplay(true);
  };
  const close = () => {
    setDisplay(false);
  };
  if (display) {
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div onClick={close} className="modal-backdrop">
          <div
            onClick={(e) => e.stopPropagation()}
            className="modal-box modal__signup"
          >
            {props.children}
          </div>
        </div>
      </div>,
      document.querySelector("#modal3")
    );
  }
  return null;
});
export default LoginModal;
