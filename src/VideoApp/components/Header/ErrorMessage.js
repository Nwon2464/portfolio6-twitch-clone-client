import React from "react";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
const ErrorMessage = (props) => {
  return (
    <div className="error app__flex">
      <ErrorOutlineOutlinedIcon className="error__icon" />
      <div style={{ color: "black" }}>
        <strong>Error: </strong>
        {props.error}
      </div>
    </div>
  );
};

export default ErrorMessage;
