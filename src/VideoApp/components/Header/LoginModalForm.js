import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { logIn } from "../../actions";
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
          <>
            <form
              id="login__form"
              className="ui large form"
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <div
                style={{ fontSize: "0.8rem" }}
                className="ui horizontal divider"
              >
                Or
              </div>
              <div className="app__flex__set">
                <a
                  id="google__log"
                  // href="https://server-t.vercel.app/auth/google"
                  //relative path directs to localhost3000, needs proxy setup 
                  href="/auth/google"
                  className="ui red labeled icon button"
                >
                  Log In With Google
                  <i className="google icon"></i>
                </a>
              </div>
            </form>
          </>
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
