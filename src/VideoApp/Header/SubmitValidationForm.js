import React, { useEffect, useRef } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import renderField from "./RenderField";
import { connect } from "react-redux";
import { signUpCreate } from "../actions";
import SignupLoading from "./SignupLoading";
import { ReactComponent as TwitchIcon } from "./twitch-seeklogo.com.svg";
import ErrorMessage from "./ErrorMessage";
const SubmitValidationForm = (props) => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  const onSubmit = (formValue) => {
    props.signUpCreate(formValue);
  };
  //   console.log(props);
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
            className="ui large form"
            style={{ padding: "1rem" }}
            onSubmit={handleSubmit(onSubmit)}
          >
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
            <div className="field">
              <Field
                validate={[usernameValidate, required, maxLength30]}
                name="username"
                label="Username"
                type="text"
                component={renderField}
                placeholder="Username"
                // autoFocus="true"
              />
            </div>
            <div className="field">
              <Field
                label="Password"
                name="password"
                type="password"
                component={renderField}
                placeholder="Password"
                validate={[password, required]}
              />
            </div>

            <div className="field">
              <Field
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                component={renderField}
                placeholder="Confirm Password"
                validate={[password, required]}
              />
            </div>

            <div className="field">
              <Field
                validate={[email, required]}
                label="Email"
                name="email"
                type="email"
                component={renderField}
                placeholder="Email"
              />
            </div>
            <div className="field">
              <label>Date of Birth</label>
              <Field
                className="app__select"
                name="dateofbirth"
                component="select"
              >
                <option value="">Select</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </Field>
            </div>
            <div className="ui equal width form">
              <div className="fields">
                <div className="field">
                  <Field
                    validate={[minValue0, maxValue13, number]}
                    label="Month"
                    name="month"
                    type="text"
                    component={renderField}
                    placeholder="Month"
                  />
                </div>
                <div className="field">
                  <Field
                    validate={[number, yearMinValue1930, yearMaxValue2020]}
                    label="Year"
                    name="year"
                    type="text"
                    component={renderField}
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
            {/* {error && <strong>{error}</strong>} */}

            <div className="inline field">
              <label
                style={{
                  fontSize: "small",
                }}
              >
                By Clicking Sign Up, you are indicating that you have read and
                acknowledge the{" "}
                <Link to="#" style={{ color: "#00b5ad" }}>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link style={{ color: "#00b5ad" }} to="#">
                  {" "}
                  Privacy Notice
                </Link>
              </label>
            </div>

            <div
              style={{
                position: "relative",
                top: "11px",
              }}
            >
              <button
                style={{
                  position: "relative",
                  bottom: "3px",
                  color: "white",
                  backgroundColor: "#00b5ad",
                }}
                className="ui fluid medium button"
                type="submit"
                disabled={submitting}
              >
                Sign Up{" "}
              </button>
              <button
                className="ui fluid medium button"
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};
//username validation
const required = (value) => (value ? undefined : "Required😒");
const maxLength = (max) => (value) =>
  value && value.length > max
    ? `Must be ${max} characters or less😒`
    : undefined;
const maxLength30 = maxLength(30);
const usernameValidate = (value) =>
  value &&
  !/^(?=.{4,30}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/i.test(value)
    ? "Invalid Username😒"
    : undefined;

const password = (value, allValues) => {
  if (value && !/^[a-zA-Z0-9]{3,30}$/i.test(value)) return "Invalid password😒";
  if (value !== allValues.password) {
    return "Passwords don't match😒";
  }
  return undefined;
};

//month
const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number😒" : undefined;
const minValue = (min) => (value) =>
  value && value <= min ? `Invalid number😒` : undefined;
const minValue0 = minValue(0);
const maxValue = (min) => (value) =>
  value && value > min ? `Invalid number😒` : undefined;
const maxValue13 = maxValue(12);

//year
const yearMinValue = (min) => (value) =>
  value && value <= min ? `Invalid number😒` : undefined;
const yearMinValue1930 = yearMinValue(1930);
const yearMaxValue = (max) => (value) =>
  value && value > max ? `Invalid number😒` : undefined;
const yearMaxValue2020 = yearMaxValue(2020);
// minValue1930,number,maxValue2020
//email
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address😒"
    : undefined;

// SubmitValidationForm = connect(null, { signUpCreate })(SubmitValidationForm);
const mapStateToProps = (state) => {
  console.log(state);
  return {
    errorFromRedux: state.error.errorMessage,
    loading: state.loading,
  };
};
export default connect(mapStateToProps, { signUpCreate })(
  reduxForm({
    form: "submitValidation", // a unique identifier for this form
  })(SubmitValidationForm)
);

// export default reduxForm({
//   form: "submitValidation", // a unique identifier for this form
// })(SubmitValidationForm);
