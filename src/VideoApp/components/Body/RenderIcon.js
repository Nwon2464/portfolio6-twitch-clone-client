import React, { useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { Link } from "react-router-dom";

const checkViewers = (views) => {
    if (views <= 999) {
      return <>{`${views} viewers`}</>;
    } else if (views < 999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000).toFixed(1)
        }K viewers`}</>
      );
    } else if (views <= 9999999) {
      return (
        <>{`${
          Math.sign(views) * (Math.abs(views) / 1000000).toFixed(1)
        }M viewers`}</>
      );
    }
  };
const RenderIcons = (props) => {
    const [visible, setVisible] = useState(4);

    const showClick = (e) => {
        e.preventDefault();
        setVisible(visible + 4);
    };
    return <>
    {props.videos.slice(0,props.visible).map((e, i) => {
        return (
            <>
             <div key={i} className="app-full-width app-recommend">
            <Link
              to={{
                pathname: `/${e.user_name}`,
                state: {
                  data: e,
                },
              }}
              className="app-full-width side-nav-card-link app-pd-x-1 app-pd-y-05 app-align-items-center app-flex-nowrap app-flex"
            >
              <div className="app-align-items-center app-flex-shrink-0 app-avatar--size-30">
                <figure className="app-avatar--size-30">
                  <img
                    style={{ width: 30, height: 30, borderRadius: 5000 }}
                    src={e.profile_image_url}
                    alt="profileImage"
                  />
                </figure>
              </div>
              <div className="app-full-width app-flex app-justify-content-between app-ellipsis app-full-height app-align-items-center">
                <div className="app-mg-l-1 app-full-width app-ellipsis">
                  <div className="app-flex app-align-items-center">
                    <p
                      style={{
                        fontWeight: 600,
                        lineHeight: "1.2",
                      }}
                      className="app-ellipsis app-flex-grow-1 app-font-size-6"
                    >
                      {e.user_name}
                    </p>
                  </div>
                  <div className="app-pd-r-05">
                    <p
                      style={{ lineHeight: "1.2" }}
                      className="app-font-size-5 app-c-text-alt app-ellipsis"
                    >
                      {e.game_name}
                    </p>
                  </div>
                </div>
                <div className="app-mg-l-05 app-flex-shrink-0">
                  <div className="app-flex app-align-items-center">
                    <div className="app-live-channel-status-indicator app-border-radius-rounded app-live-channel-status-indicator--small"></div>
                    <div className="app-mg-l-05">
                      <span className="app-font-size-5 app-c-text-alt">
                        {checkViewers(e.viewer_count)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
            </>
         )
      })}
        <div>
            {props.visible < props.videos.length ? (
                        <span onClick={props.showClick} className="showMore">
                        <a className="showMore__button">
                            Show more
                            <ExpandMoreOutlinedIcon className="down__icon" />
                        </a>
                        </span>
                    ) : null
            } 
        </div>
    </>
    
};
export default RenderIcons;
