// import React from "react";
// import { connect } from "react-redux";
// import { ReactComponent as TwitchIcon } from "./twitch-seeklogo.com.svg";

// const LoginModalForm = (props) => {
//   return (
//     <>
//       <div className="ui middle aligned center aligned grid">
//         <div className="column">
//           <h2 className="ui image header">
//             <TwitchIcon />
//             <div className="content">Log-in to your account</div>
//           </h2>

//           <form className="ui large form">
//             <div className="ui stacked segment">
//               <div className="field">
//                 <div className="ui left icon input">
//                   <i className="user icon"></i>
//                   <input
//                     type="text"
//                     name="email"
//                     placeholder="E-mail address"
//                   />
//                 </div>
//               </div>
//               <div className="field">
//                 <div className="ui left icon input">
//                   <i className="lock icon"></i>
//                   <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                   />
//                 </div>
//               </div>
//               <div className="ui fluid large teal submit button">Login</div>
//             </div>
//             <div className="ui error message"></div>
//           </form>
//           <div class="ui horizontal divider">Or</div>
//           <a
//             id="google__log"
//             href="/auth/google"
//             className="ui red labeled icon button"
//           >
//             Log In With Google
//             <i class="google icon"></i>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default connect(null)(LoginModalForm);
import React from "react";
import { connect } from "react-redux";
import { ReactComponent as TwitchIcon } from "./twitch-seeklogo.com.svg";
import { Field, reduxForm } from "redux-form";
import { logIn } from "../actions";
import LoginRenderField from "./LoginRenderField";
import ErrorMessage from "./ErrorMessage";
import SignupLoading from "./SignupLoading";

const LoginModalForm = (props) => {
  const { handleSubmit } = props;
  const onSubmit = (formValue) => {
    // console.log(formValue);
    props.logIn(formValue);
  };
  return (
    <>
      {props.loading.loading ? (
        <SignupLoading />
      ) : (
        <>
          {props.errorFromRedux && (
            <ErrorMessage error={props.errorFromRedux} />
          )}

          <form
            id="login__form"
            className="ui large form"
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <div className="field">
              <Field
                // validate={[usernameValidate, required]}
                name="username"
                label="Username"
                type="text"
                component={LoginRenderField}
                placeholder="Username"
                autoFocus={true}
              />
            </div>
            <div className="field">
              <Field
                label="Password"
                name="password"
                type="password"
                component={LoginRenderField}
                placeholder="Password"
                // validate={[password, required]}
              />
            </div>
            <div>
              <button className="ui fluid medium button" type="submit">
                Log In
              </button>
            </div>
            <div className="ui horizontal divider">Or</div>
            <div className="app__flex__set">
              <a
                id="google__log"
                href="/auth/google"
                className="ui red labeled icon button"
              >
                Log In With Google
                <i className="google icon"></i>
              </a>
            </div>
          </form>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    errorFromRedux: state.error.errorMessage,
    loading: state.loading,
    join: state.join.loginState,
  };
};
export default connect(mapStateToProps, { logIn })(
  reduxForm({
    form: "LoginSubmitValidation", // a unique identifier for this form
  })(LoginModalForm)
);
