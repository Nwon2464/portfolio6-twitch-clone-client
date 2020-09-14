import React, { useEffect } from "react";
import BodyLeft from "../../Body/BodyLeft";
import "./ViewLeft.css";
import FilterListIcon from "@material-ui/icons/FilterList";
import history from "../../history";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ShareIcon from "@material-ui/icons/Share";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import CommentList from "./CommentList/CommentList";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
const ViewLeft = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchStreams();
  }, []);
  const { videoId, title } = props.selected;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="view__left">
      <div id="video" className="ui embed">
        <iframe src={videoSrc} />
      </div>
      <div className="view__left__All">
        <div className="view__left__anchor">
          <a href="#">React</a>
          <span />
          <a href="#">Javascript</a>
          <span />

          <a href="#">Youtube</a>
          <span />
        </div>
        <h1 id="view__left__h1" className="ui header">
          {title}
        </h1>
        <div className="view__left__info">
          <div className="view__left__view">
            <div>Views 2.3M</div>
          </div>
          <div className="view__left__LDSS__info">
            <div className="view__left__LDSS__all">
              <div className="view__left__like">
                <ThumbUpIcon />
                <h5>Like</h5>
              </div>
              <div className="view__left__dislike">
                <ThumbDownIcon />
                <h5>Dislike</h5>
              </div>
              <div className="view__left__share">
                <ShareIcon />
                <h5>Share</h5>
              </div>
              <div className="view__left__saved">
                <PlaylistAddIcon />
                <h5>Saved</h5>
              </div>
              <div className="view__left__dot">
                <MoreHorizIcon />
              </div>
            </div>
          </div>
        </div>
        <CommentList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.selectedVideo,
  };
};

export default connect(mapStateToProps, {
  fetchStreams,
})(ViewLeft);
