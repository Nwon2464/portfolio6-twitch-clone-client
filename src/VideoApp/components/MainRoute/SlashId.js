import React from "react";
import { Link } from "react-router-dom";
import BodyLeft from "../Body/BodyLeft";
import NotFound from "../../error/NotFound";
import CheckoutIcon from "../../svg/checkoutIcon";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SaveAltOutlinedIcon from "@material-ui/icons/SaveAltOutlined";
const SlashId = (props) => {
  console.log(props);
  return (
    <>
      <div className="app-flex app-flex-nowrap app-relative app-full-height app-overflow-hidden">
        <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
          <BodyLeft />
        </div>
        {props.location.state ? (
          <div className="app-flex app-flex-column app-full-width app-overflow-scroll">
            <iframe
              // https://player.twitch.tv/?channel=juansguarnizo&muted=true&parent=frontend-react-video-app-vercel-app&parent=frontend-react-video-app.vercel.app
              src={`https://player.twitch.tv/?channel=${props.location.state.data.user_name}&muted=true&parent=frontend-react-video-app-vercel-app&parent=frontend-react-video-app.vercel.app`}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="<scrolling>"
              allowFullScreen
            ></iframe>

            <div className="app-body-right-background">
              <div className="app-flex app-justify-content-between app-relative">
                <div className="app-mg-1 app-full-width app-flex">
                  <div className="app-mg-t-03 app-pd-l-1">
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
                  <div className="app-flex app-flex-column app-full-width app-pd-x-1">
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
                            <Link
                              to={{
                                pathname: `/category/games/${props.location.state.data.game_name}`,
                                state: { data: props.location.state.data },
                              }}
                              className="app-color-main app-font-size-5"
                            >
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
              {/* <div style={{ minHeight: 1500 }}>Bottom</div> */}
            </div>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};

export default SlashId;
