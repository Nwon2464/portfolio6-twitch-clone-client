import React from "react";
import { Link } from "react-router-dom";
import SlashVideoAllLoading from "./SlashVideoAllLoading";
import MoreVertIcon from "@material-ui/icons/MoreVert";
const Reuseable2 = (props) => {
  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  };
  const dotReplace = (string) => {
    return string.replace("h", ":").replace("m", ":").replace("s", "");
  };
  const checkViewers = (views) => {
    if (views <= 999) {
      return <>{`${views} Viewers`}</>;
    } else if (views < 999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000).toFixed(1)
        }K Viewers`}</>
      );
    } else if (views <= 9999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000000).toFixed(1)
        }M Viewers`}</>
      );
    }
  };

  console.log(props);
  return (
    <>
      <div className="app-pd-l-2 app-pd-r-2 app-mg-b-1">
        <div className="app-flex app-full-width app-relative app-height-15">
          <div className="app-flex app-flex-column app-full-height">
            <div className="app-align-self-center app-flex app-full-height app-justify-content-center app-align-items-center">
              <Link to="/">
                <h3 className="app-flex app-flex-column app-font-size-9">
                  Videos
                </h3>
              </Link>
            </div>
            <div
              style={{ marginTop: 13 }}
              className="navigation-link-indicator-container"
            >
              <div className="navigation-link-active-indicator"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="app-flex app-justify-content-center app-align-items-center app-pd-l-2 app-pd-r-2">
          <div className="card__display__flex__wrap">
            {props.streams.map((e, i) => {
              return (
                <div key={i} className="app__tower__300 app-pd-r-02">
                  <div className="app__card__height">
                    <div className="app__card__padding_bottom app__card__height">
                      <article className="card__display__flex__direction">
                        <div className="app__width app__order__2 app__margin__top">
                          <div className="app__flex__nowrap app__flex">
                            <div className="app__min__width__0 app__order__2 app__flex__shrink__1 app__flex__grow__1 app__width">
                              <div className="app__margin__bottom">
                                <div className="channel__font_1">
                                  <h3 className="app__ellipsis app__font__weight">
                                    <Link
                                      to={{
                                        pathname: `/${e.user_name}`,
                                        state: { data: props.user },
                                      }}
                                      className="app__font__size app__cursor"
                                    >
                                      {e.title}
                                    </Link>
                                  </h3>
                                </div>
                              </div>
                              <div className="channel__user">
                                <div>
                                  <h4 className="app__ellipsis app__font__size__0_8 app__color__grey app__cursor">
                                    <Link
                                      to={{
                                        pathname: `/${e.user_name}`,
                                        state: { data: props.user },
                                      }}
                                      className="app__color__grey app__cursor app__font__size__0_8"
                                    >
                                      {e.user_name}
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="channel__down">
                              <MoreVertIcon />
                            </div>
                          </div>
                        </div>

                        <Link
                          // to={{
                          //   pathname: `/${e.user_name}`,
                          //   state: { data: e },
                          // }}
                          to={{
                            pathname: `/${props.match.params.id}`,
                            state: { data: props.location.state.data },
                          }}
                          className="app__order__1"
                        >
                          <div className="app__relative app__cursor">
                            <div className="app-flex">
                              <img
                                className="channel__thumbnail"
                                src={
                                  e.thumbnail_url ||
                                  "https://vod-secure.twitch.tv/_404/404_processing_320x180.png"
                                }
                              />
                            </div>
                            <div className="app__absolute app__top__0 app__left__0 app__card__height app__width">
                              <div className="app__absolute app__top__0 app__right__0 app__margin">
                                <p className="app__view__indicator app__padding app__margin__bottom app__border__radius">
                                  {timeSince(new Date(e.created_at))}
                                </p>
                              </div>

                              <div className="app__absolute app__top__0 app__left__0 app__margin">
                                <p className="app__view__indicator app__padding app__margin__bottom app__border__radius">
                                  {dotReplace(e.duration)}
                                </p>
                              </div>
                              <div className="app__absolute app__bottom__0 app__left__0 app__margin">
                                <p className="app__view__indicator app__padding app__margin__bottom app__border__radius">
                                  {checkViewers(e.view_count)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </article>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reuseable2;
