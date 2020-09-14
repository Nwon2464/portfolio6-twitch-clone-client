import React from "react";
import { connect } from "react-redux";

const LoginModalForm = (props) => {
  return (
    <>
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <img
              src="https://semantic-ui.com/examples/assets/images/logo.png"
              className="image"
              alt="logo"
            />
            <div className="content">Log-in to your account</div>
          </h2>

          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="ui fluid large teal submit button">Login</div>
            </div>
            <div className="ui error message"></div>
          </form>
          <div class="ui horizontal divider">Or</div>
          <a
            id="google__log"
            href="/auth/google"
            className="ui red labeled icon button"
          >
            Log In With Google
            <i class="google icon"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default connect(null)(LoginModalForm);
