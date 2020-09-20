import React from "react";
import BodyLeft from "./Body/BodyLeft";
const CategoryGamesId = (props) => {
  console.log(props);
  return (
    <div className="app__body">
      <BodyLeft />
      /category/games/{props.match.params.id}
      {/* <CategoryGamesId /> */}
    </div>
  );
};

export default CategoryGamesId;
