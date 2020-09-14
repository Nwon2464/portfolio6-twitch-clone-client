import "./Modal.css";
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { closeModal } from "./actions";
import { connect } from "react-redux";
const Modal = (props) => {
  // const {
  //   selectedVideo: { id, title, description },
  // } = props;
  const {
    selected: { id, title, description },
  } = props;

  console.log(props);
  const videoSrc = `https://www.youtube.com/embed/${id}`;
  return ReactDOM.createPortal(
    <div
      onClick={() => props.closeModal(false)}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active "
      >
        <div className="ui embed">
          <iframe src={videoSrc} />
        </div>
        <h4 id="modal__h4" className="ui header">
          {title}
        </h4>
        <p id="modal__p">{description}</p>
        <div id="modal__action" className="actions">
          <Link
            onClick={() => props.closeModal(false)}
            to={`/streams/${id}`}
            className="ui primary button"
          >
            View Detail
          </Link>
          <Link
            to="/"
            onClick={() => props.closeModal(false)}
            className="ui button"
          >
            Close
          </Link>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = (state) => {
  return {
    selected: state.selectedVideo,
  };
};

export default connect(mapStateToProps, { closeModal })(Modal);
