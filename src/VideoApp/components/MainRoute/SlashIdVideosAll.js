import React from "react";
import CheckoutIcon from "../../svg/checkoutIcon";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SaveAltOutlinedIcon from "@material-ui/icons/SaveAltOutlined";
import { Link } from "react-router-dom";
import BodyLeft from "../Body/BodyLeft";
const SlashIdVideosAll = (props) => {
  console.log(props.location.state);
  return (
    <div className="app-flex app-flex-nowrap app-relative app-full-height app-overflow-hidden">
      <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
        <BodyLeft />
      </div>
      <div className="app-relative app-flex app-flex-column app-full-height app-full-width app-overflow-scroll">
        <div
          className="app-full-height"
          style={{ background: "rebeccapurple" }}
        >
          <div className="app-flex app-flex-column">
            <div
              style={{ minHeight: "32.8rem", maxHeight: "100%", width: "75%" }}
            >
              {" "}
              /:id/videos/all
            </div>
            <div
              className="app-absolute"
              style={{
                marginTop: 400,
                minHeight: 460,
                width: "100%",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "85%",
                  height: "100%",
                }}
                className="app-absolute"
              >
                <div
                  className="app-mg-x-2"
                  style={{
                    height: "30%",
                    paddingTop: "1.5rem",
                    position: "sticky",
                    zIndex: 2,
                  }}
                >
                  <div className="app-flex">
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
                                src={
                                  props.location.state.data.profile_image_url
                                }
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
                    <div
                      style={{ border: "1px solid red" }}
                      className="app-flex app-flex-column app-full-width app-pd-x-1"
                    >
                      <div
                        style={{ border: "1px solid red", minHeight: "2.5rem" }}
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
                                  <span className="app-font-size-4">
                                    Follow
                                  </span>
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
                                  <span className="app-font-size-4">
                                    Subscribe
                                  </span>
                                  <div className="app-mg-l-05 app-flex app-justify-content-center">
                                    <ExpandMoreOutlinedIcon
                                      style={{ width: 17, height: 17 }}
                                    />
                                  </div>{" "}
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
                              <h5>{props.location.state.data.title}</h5>
                            </div>
                            <div>
                              <Link className="app-color-main app-font-size-5">
                                {props.location.state.data.game_name}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="app-flex app-flex-grow-0 app-flex-shrink-1 app-align-items-start">
                          <div className="app-flex app-align-items-start app-mg-t-03">
                            {/* <div>user COOunt</div> */}
                            <div className="app-flex-grow-1 app-flex app-pd-l-05 app-relative app-full-height app-align-items-stretch">
                              <button
                                id="user"
                                className="app-cursor-pointer app-inline-flex app-align-items-center app-align-middle app-relative app-justify-content-center"
                              >
                                <div
                                  style={{ width: "2.4rem", height: "1.8rem" }}
                                >
                                  <SaveAltOutlinedIcon
                                    style={{ width: "100%", height: "100%" }}
                                  />
                                </div>{" "}
                              </button>
                            </div>{" "}
                            <div className="app-flex-grow-1 app-flex app-relative app-full-height app-align-items-stretch">
                              <button
                                id="user"
                                className="app-cursor-pointer app-inline-flex app-align-items-center app-align-middle app-relative app-justify-content-center"
                              >
                                <div
                                  style={{ width: "2.4rem", height: "1.8rem" }}
                                >
                                  <MoreVertOutlinedIcon
                                    style={{ width: "100%", height: "100%" }}
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{ height: "100%", width: "100%", padding: "0 2rem" }}
                ></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          className="app-absolute app-top-0 app-left-0"
          style={{
            background: "green",
            maxHeight: 460,
            width: "100%",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          <div>
            <img
              style={{ height: 460, width: "100%" }}
              src={props.location.state.data.thumbnail_url}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlashIdVideosAll;
