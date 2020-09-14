import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamsForm from "./StreamsForm";
const StreamsEdit = (props) => {
  
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  };

  const passToField = () => {
    return {
      Stream_Title: props.streams.title,
      Stream_Description: props.streams.description,
      Channel_Title: props.streams.channelTitle,
      Notes: props.streams.Notes,
    };
  };
  const renderEdit = () => {
    if (!props.streams) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <h3>Edit a Stream</h3>
        <StreamsForm onSubmit={onSubmit} initialValues={passToField()} />
      </>
    );
  };

  return <div className="ui container">{renderEdit()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamsEdit
);
