import React from "react";
import { createStream } from "../../actions/index";
import { connect } from "react-redux";
import StreamsForm from "./StreamsForm";
const StreamsCreate = (props) => {
  console.log(props);
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };
  return (
    <div className="ui container">
      <h3>Create a Stream</h3>
      <StreamsForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamsCreate);
