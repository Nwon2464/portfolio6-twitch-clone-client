import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import LoginModalForm from "./LoginModalForm";
import SignUpModal from "./SignUpModal";
import ClearIcon from "@material-ui/icons/Clear";
import { panes } from "./SignupReuse";
import { Tab } from "semantic-ui-react";

const LoginSignUpButton = () => {
  const modalRef = React.useRef();
  const tryRef = useRef();
  const modalRef2 = React.useRef();
  const openLoginModal = () => {
    modalRef.current.openModal();
  };
  const openLoginModal2 = () => {
    modalRef2.current.openModal();
  };
  const signUpModalRef = React.useRef();

  const openSignUpModal = () => {
    signUpModalRef.current.openModal();
  };
  return (
    <div className="app-flex app-flex-nowrap">
      <div className="app-pd-x-03">
        <button
          className="app-border-bottom-left-radius-large app-border-bottom-right-radius-large app-border-top-left-radius-large app-border-top-right-radius-large app-core-secondary app-align-middle app-relative app-justify-content-center app-align-items-center app-inline-flex app-core-button app-overflow-hidden app-cursor-pointer"
          onClick={openLoginModal}
        >
          <div className="app-button-x app align-items-center app-flex app-flex-grow-0">
            <div className="app-flex-grow-0">Log In</div>
          </div>
        </button>

        <LoginModal ref={modalRef}>
          <div className="clear__btn" onClick={() => modalRef.current.close()}>
            <ClearIcon className="clear__icon" style={{ fontSize: "2rem" }} />
          </div>

          <Tab
            style={{ width: "100%" }}
            panes={panes}
            menu={{ secondary: true, pointing: true, attached: "bottom" }}
            defaultActiveIndex={0}
          />
        </LoginModal>
      </div>
      <div className="app-pd-x-03">
        <button
          onClick={openLoginModal2}
          style={{ marginRight: "5px" }}
          className="app-border-bottom-left-radius-large app-border-bottom-right-radius-large app-border-top-left-radius-large app-border-top-right-radius-large app-align-middle app-relative app-justify-content-center app-align-items-center app-inline-flex app-core-button app-core-primary app-overflow-hidden app-cursor-pointer"
        >
          <div className="app-button-x app align-items-center app-flex app-flex-grow-0">
            <div className="app-flex-grow-0">Sign Up</div>
          </div>
        </button>
        <LoginModal ref={modalRef2}>
          <div className="clear__btn" onClick={() => modalRef2.current.close()}>
            <ClearIcon className="clear__icon" style={{ fontSize: "2rem" }} />
          </div>
          <Tab
            ref={tryRef}
            style={{ width: "100%" }}
            panes={panes}
            menu={{ secondary: true, pointing: true, attached: "bottom" }}
            defaultActiveIndex={1}
          />
        </LoginModal>
      </div>
    </div>
  );
};
export default LoginSignUpButton;
