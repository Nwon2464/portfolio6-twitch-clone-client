import React from "react";
import { ReactComponent as TwitchIcon } from "./twitch-seeklogo.com.svg";
import { ReactComponent as Loader } from "./loader.svg";

const SignupLoading = () => {
  return (
    <div className="app__pd_x_2 app__pd_y_3 app__flex_column app__flex">
      {/* <div className="app__join">
        <figure className="app__flex app__margin__0">
          <TwitchIcon />
        </figure>
        <div className="app__marginLeft__0_5">
          <h4 className="app__fontSize__1_7 app__fontWeight__b">Join Today</h4>
        </div>
      </div> */}
      <div className="app__loader">
        <Loader />
      </div>

      <div className="app__flex app__justify app__align">We're verifying...!</div>
    </div>
  );
};

export default SignupLoading;
