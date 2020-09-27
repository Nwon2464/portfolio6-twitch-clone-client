import React from "react";
import SubmitValidationForm from "./SubmitValidationForm";
import { ReactComponent as TwitchIcon } from "./twitch-seeklogo.com.svg";
import { Tab } from "semantic-ui-react";
import LoginModalForm from "./LoginModalForm";
export const panes = [
  {
    menuItem: "Log In",
    render: () => (
      <>
        <div className="app__join">
          <figure className="app__flex app__margin__0">
            <TwitchIcon />
          </figure>
          <div className="app__marginLeft__0_5">
            <h4 className="app__fontSize__1_7 app__fontWeight__b">
              Log in to Twitch
            </h4>
          </div>
        </div>
        <Tab.Pane attached={false}>
          <LoginModalForm />
        </Tab.Pane>
      </>
    ),
  },
  {
    menuItem: "Sign Up",
    render: () => (
      <>
        <div className="app__join">
          <figure className="app__flex app__margin__0">
            <TwitchIcon />
          </figure>
          <div className="app__marginLeft__0_5">
            <h4 className="app__fontSize__1_7 app__fontWeight__b">
              Join Today
            </h4>
          </div>
        </div>
        <Tab.Pane attached={false}>
          <SubmitValidationForm />
        </Tab.Pane>
      </>
    ),
  },
];
