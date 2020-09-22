import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";
import { signUpErrorClose } from "../../actions";
import { connect } from "react-redux";
const SignUpModal = forwardRef((props, ref) => {
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
    //to get rid of Error message that is being receieved from server
    props.signUpErrorClose();
  };
  if (display) {
    return ReactDOM.createPortal(
      <div className="modal-wrapper">
        <div onClick={close} className="modal-backdrop">
          <div
            style={{ top: "1rem" }}
            onClick={(e) => e.stopPropagation()}
            className="modal-box"
          >
            {props.children}
          </div>
        </div>
      </div>,
      document.querySelector("#modal4")
    );
  }
  return null;
});
export default connect(null, { signUpErrorClose }, null, { forwardRef: true })(
  SignUpModal
);
