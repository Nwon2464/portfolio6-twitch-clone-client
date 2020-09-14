import React from "react";
import "./BodyLeftRow.css";
import HomeIcon from "@material-ui/icons/Home";
const BodyLeftRow = ({ selected, title, Icon }) => {
  return (
    <div className={`body__left__row ${selected && "selected"}`}>
      <Icon className="body__left__row__icon" />
      <h2 className="body__left__row__h2">{title}</h2>
    </div>
  );
};

export default BodyLeftRow;
