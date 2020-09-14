// import React from "react";
// import { Link } from "react-router-dom";
// import { reduxForm, Field } from "redux-form";
// import _ from "lodash";
// import FieldData from "./FieldData";
// import SurveyField from "./SurveyField";
// import validateEmails from "./ValidateEmail";

// const SignUp = () => {
//   const renderFields = () => {
//     return _.map(FieldData, ({ label, name }) => {
//       return (
//         <Field
//           key={name}
//           type="text"
//           label={label}
//           name={name}
//           component={SurveyField}
//         />
//       );
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
//         {renderFields()}
//         <Link to="/surveys">Cancel</Link>
//         <button type="submit">
//           Next
//           <i className="right chevron icon"></i>
//         </button>
//       </form>
//     </div>
//   );
// };

// const validate = (values) => {
//   const error = {};
//   error.emails = validateEmails(values.emails || "");

//   _.each(fieldsData, ({ name }) => {
//     if (!values[name]) {
//       error[name] = `You must provide a ${name}😒`;
//     }
//   });
//   return error;
// };

// export default reduxForm({
//   validate,
//   form: "surveyForm",
//   destroyOnUnmount: false,
// })(SignUp);
