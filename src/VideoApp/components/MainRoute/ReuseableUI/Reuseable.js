import React from "react";
import CheckoutIcon from "../../../svg/checkoutIcon";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SaveAltOutlinedIcon from "@material-ui/icons/SaveAltOutlined";
import { Link } from "react-router-dom";

const Reuseable = (props) => {
  const checkViewers = (views) => {
    if (views <= 999) {
      return <>{`${views + 159} Followers`}</>;
    } else if (views < 999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000).toFixed(1) + 159
        }K Followers`}</>
      );
    } else if (views <= 9999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000000).toFixed(1) + 150
        }M Followers`}</>
      );
    }
  };

  return (
    <>
      <div className="app-mg-t-03">
        <Link className="">
          <div className="app-relative">
            <div>
              <figure className="tw-avatar--size-50">
                <img
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 5000,
                  }}
                  src={props.location.state.data.profile_image_url}
                  alt="profileImage"
                />
              </figure>
            </div>
            <div
              style={{ bottom: 5 }}
              className="app-absolute app-flex app-full-width app-align-items-center app-justify-content-center"
            >
              <p
                style={{
                  padding: "0 0.5rem",
                  fontSize: "0.8rem",
                }}
                className="app-uppercase app-live-indicator app-font-weight app-border-radius"
              >
                {props.location.state.data.type}
              </p>
            </div>
          </div>{" "}
        </Link>
      </div>
      <div className="app-flex app-flex-column app-full-width app-pd-x-1 app-justify-content-center">
        <div
          style={{ minHeight: "2.5rem" }}
          className="app-flex app-justify-content-between app-align-items-end"
        >
          <div className="app-flex app-align-items-baseline">
            <Link>
              <h2>{props.location.state.data.user_name}</h2>
            </Link>
            <div>
              <CheckoutIcon />
            </div>{" "}
          </div>
          <div className="app-flex app-flex-grow-1 app-justify-content-end">
            <div className="app-flex app-justify-content-end app-align-items-center">
              <div className="app-flex">
                <button className="app-cursor-pointer app-pd-y-03 app-pd-x-05 app-align-items-center app-justify-content-center app-flex app-core-primary app-border-bottom-left-radius-medium app-border-bottom-right-radius-medium app-border-top-left-radius-medium app-border-top-right-radius-medium">
                  <div className="app-align-items-center app-justify-content-center app-flex">
                    <FavoriteBorderOutlinedIcon
                      style={{ width: 17, height: 17 }}
                      className="app-mg-r-05"
                    />
                    <span className="app-font-size-4">Follow</span>
                  </div>
                </button>
              </div>{" "}
              <div className="app-flex app-mg-l-05">
                <button className="app-cursor-pointer app-pd-y-03 app-pd-x-05 app-align-items-center app-justify-content-center app-flex app-core-secondary app-border-bottom-left-radius-medium app-border-bottom-right-radius-medium app-border-top-left-radius-medium app-border-top-right-radius-medium">
                  <div className="app-align-items-center app-justify-content-center app-flex">
                    <StarBorderOutlinedIcon
                      style={{ width: 17, height: 17 }}
                      className="app-mg-r-05"
                    />
                    <span className="app-font-size-4">Subscribe</span>
                    <div className="app-mg-l-05 app-flex app-justify-content-center">
                      <ExpandMoreOutlinedIcon
                        style={{ width: 17, height: 17 }}
                      />
                    </div>{" "}
                  </div>
                </button>
              </div>
              <div className="app-flex app-mg-l-05">
                <button
                  id="user"
                  className="app-cursor-pointer app-inline-flex app-align-items-center app-align-middle app-relative app-justify-content-center"
                >
                  <div style={{ width: "2.4rem", height: "2rem" }}>
                    <MoreVertOutlinedIcon
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="app-flex">
          <div className="app-flex app-flex-grow-1 app-flex-shrink-1">
            <div className="app-flex app-full-width app-flex-column app-mg-b-03">
              <div>
                <Link className="app-color-main app-font-size-5">
                  {checkViewers(props.location.state.data.viewer_count)}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reuseable;
