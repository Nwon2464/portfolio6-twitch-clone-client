import React from "react";
import "./VideoItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { showModal, selectVideo } from "../../actions";
const VideoItem = (props) => {
  const { stream } = props;

  const renderAdmin = () => {
    if (stream.userId === props.currentUserId) {
      return (
        <div className="user__admin">
          <Link id="user__admin__edit" to={`/streams/edit/${stream.id}`} className="ui primary button">
            Edit
          </Link>
          <Link id="user__admin__delete" to={`/streams/delete/${stream.id}`} className="ui red button">
            Delete
          </Link>
        </div>
      );
    }
  };
  // props.selectVideo(streams);
  // console.log(stream);
  return (
    <div className="video__card">
      <img
        // onClick={() => onVideoSelect(stream)}
        onClick={() => {
          props.showModal(true);
          props.selectVideo(stream);
        }}
        className="video__card__img"
        src={stream.imgUrl}
        alt={stream.title}
      />
      <div className="video__card__info">
        <img
          src={stream.imageAvatar}
          className="video__card__avatar ui avatar image"
        />
        <div className="video__card__text">
          <h4 className="video__card__h4">{stream.title}</h4>
          <p>{stream.channelTitle}</p>

          <p>{stream.publishTime}</p>
          {renderAdmin()}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { showModal, selectVideo })(VideoItem);
