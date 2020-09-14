import React from "react";
import { Field, reduxForm } from "redux-form";
import FieldData from "./createStreams/FieldData";
import _ from "lodash";
import StreamField from "./createStreams/StreamField";

const StreamsForm = (props) => {
  const renderFields = () => {
    return _.map(FieldData, ({ label, name }) => {
      return (
        <Field
          key={name}
          type="text"
          label={label}
          name={name}
          component={StreamField}
        />
      );
    });
  };
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };


  console.log(props);

  return (
    <div className="ui container">
      <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
        {renderFields()}
        <button className="ui primary button">Submit</button>
      </form>
    </div>
  );
};

const validate = (formValues) => {
  const error = {};

  _.each(FieldData, ({ name }) => {
    if (!formValues[name]) {
      error[name] = `You must provide a ${name}😒`;
    }
  });

  return error;
};
export default reduxForm({
  validate,
  form: "streamForm",
})(StreamsForm);
