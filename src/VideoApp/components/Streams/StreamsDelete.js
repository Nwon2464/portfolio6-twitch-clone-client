import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteStream, fetchStream } from "../../actions";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import history from "../../history";

const StreamsDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, [props.match.params.id]);
  const actions = () => {
    return (
      <>
        <button
          onClick={() => props.deleteStream(props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </>
    );
  };
  const renderContent = () => {
    if (!props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete the stream with title : ${props.stream.title}`;
  };
  return (
    <DeleteModal
      title="Delete Stream"
      content={renderContent()}
      actions={actions()}
      onDismiss={() => history.push("/")}
    />
  );
};
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamsDelete
);
