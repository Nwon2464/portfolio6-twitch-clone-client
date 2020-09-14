import React from "react";
import "./ViewRight.css";
import ViewRightNext from "./ViewRightNext";
import AutorenewOutlinedIcon from "@material-ui/icons/AutorenewOutlined";
const ViewRight = (props) => {
  return (
    <div className="view__right">
      <div className="view__right__next">
        <h2>Next</h2>
        <div className="view__right__auto">
          <h4>Autoplay</h4>
          <AutorenewOutlinedIcon />
        </div>
      </div>
      <ViewRightNext />
    </div>
  );
};

export default ViewRight;
