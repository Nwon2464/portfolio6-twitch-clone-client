// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// const LoginModal = (props) => {
//   return ReactDOM.createPortal(
//     <div onClick={props.onDismiss} className="ui dimmer modals visible active">
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="ui standard modal visible active"
//       >
//         <div className="ui middle aligned center aligned grid">
//           <div className="column">
//             <h2 className="ui teal image header">
//               <img src="" className="image" />
//               <div className="content">Log In to your account</div>
//             </h2>
//           </div>
//         </div>
//         {/* <div className="actions">asdf</div> */}
//       </div>
//     </div>,
//     document.querySelector("#modal3")
//   );
// };
// export default LoginModal;
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
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
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
