import React from "react";

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      <div className={touched && error ? "ui pointing red basic label" : null}>
        {touched && error}
      </div>
    </div>
  );
};
