// import React from "react";
// import { Link } from "react-router-dom";
// import LoginModal from "./LoginModal";
// import LoginModalForm from "./LoginModalForm";
// import SignUpModal from "./SignUpModal";
// import SubmitValidationForm from "./SubmitValidationForm";
// import ClearIcon from "@material-ui/icons/Clear";
// const LoginSignUpButton = () => {
//   const modalRef = React.useRef();

//   const openLoginModal = () => {
//     modalRef.current.openModal();
//   };

//   const signUpModalRef = React.useRef();

//   const openSignUpModal = () => {
//     signUpModalRef.current.openModal();
//   };

//   return (
//     <>
//       <button
//         onClick={openLoginModal}
//         className="header__icon smt__button__login ui button"
//       >
//         Log In
//       </button>

//       <LoginModal ref={modalRef}>
//         <div className="clear__btn" onClick={() => modalRef.current.close()}>
//           <ClearIcon className="clear__icon" style={{ fontSize: "2rem" }} />
//         </div>

//         <LoginModalForm />
//       </LoginModal>
//       <button
//         onClick={openSignUpModal}
//         style={{ marginRight: "5px" }}
//         className="header__icon smt__button__signup ui button"
//       >
//         Sign Up
//       </button>
//       <SignUpModal ref={signUpModalRef}>
//         <div
//           className="clear__btn"
//           onClick={() => signUpModalRef.current.close()}
//         >
//           <ClearIcon className="clear__icon" style={{ fontSize: "2rem" }} />
//         </div>

//         <SubmitValidationForm />
//       </SignUpModal>
//     </>
//   );
// };
// export default LoginSignUpButton;
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import LoginModalForm from "./LoginModalForm";
import SignUpModal from "./SignUpModal";
import SubmitValidationForm from "./SubmitValidationForm";
import ClearIcon from "@material-ui/icons/Clear";
import { ReactComponent as TwitchIcon } from "./twitch-seeklogo.com.svg";

import { Tab } from "semantic-ui-react";

const panes = [
  {
    menuItem: "Log In",
    render: () => (
      <>
        <div className="app__join">
          <figure className="app__flex app__margin__0">
            <TwitchIcon />
          </figure>
          <div className="app__marginLeft__0_5">
            <h4 className="app__fontSize__1_7 app__fontWeight__b">
              Log in to Twitch
            </h4>
          </div>
        </div>
        <Tab.Pane attached={false}>
          <LoginModalForm />
        </Tab.Pane>
      </>
    ),
  },
  {
    menuItem: "Sign Up",
    render: () => (
      <>
        <div className="app__join">
          <figure className="app__flex app__margin__0">
            <TwitchIcon />
          </figure>
          <div className="app__marginLeft__0_5">
            <h4 className="app__fontSize__1_7 app__fontWeight__b">
              Join Today
            </h4>
          </div>
        </div>
        <Tab.Pane attached={false}>
          <SubmitValidationForm />
        </Tab.Pane>
      </>
    ),
  },
];

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

          {/* <LoginModalForm /> */}
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
