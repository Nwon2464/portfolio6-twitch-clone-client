import React from "react";
import BodyLeft from "../Body/BodyLeft";
const CategoryGamesId = (props) => {
  console.log(props);
  return (
    <div className="app-flex app-flex-nowrap app-relative app-full-height">
      <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
        <BodyLeft />
      </div>
      <div> /category/games/{props.match.params.id}</div>
    </div>
  );
};

export default CategoryGamesId;
