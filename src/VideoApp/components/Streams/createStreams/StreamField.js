import React from "react";

export default (props) => {
  const {
    input,
    label,
    meta: { touched, error },
  } = props;
  console.log(input);
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      <div>{touched && error}</div>
    </div>
  );
};

//<div className={touched && error ? "ui pointing red basic label" : null}>
