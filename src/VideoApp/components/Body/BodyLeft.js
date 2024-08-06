import React ,{useState} from "react";
import "./BodyLeft.css";
import { Link } from "react-router-dom";
import ShowClickRenderBodyLeft from "./ShowClickRenderBodyLeft";
import { connect } from "react-redux";
import RenderIcons from "./RenderIcon";
const BodyLeft = (props) => {
  const [visible, setVisible] = useState(6);

  const showClick = (e) => {
    e.preventDefault();
    setVisible(visible + 6);
  };
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
  return (
    <div className="app-flex app-flex-column">
      
      <div className="app-pd-t-05 recommended_channels">
        <h5 className="app-mg-1">Recommended Channels</h5>
        
        <div className="app-relative app-align-items-center app-flex app-flex-column app-full-width">
        {props.twitch.activeLiveTwitch.length === 0 ? null : (
             <ShowClickRenderBodyLeft 
             render={(visible, showClick) => (
              <RenderIcons
                categories="Recommended Channels"
                videos={props.twitch.activeLiveTwitch}
                visible={visible}
                // checkTags={checkTags}
                checkViewers={checkViewers}
                showClick={showClick}
              />
            )}
            />
        )}  
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    twitch: state.twitch,
  };
};
export default connect(mapStateToProps)(BodyLeft);