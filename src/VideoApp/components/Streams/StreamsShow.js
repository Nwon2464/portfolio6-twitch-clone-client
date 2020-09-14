import React, { useEffect } from "react";
import ViewLeft from "../View/ViewLeft";
import ViewRight from "../View/ViewRight";
import { connect } from "react-redux";
import { fetchStream, selectVideo } from "../../actions";
const StreamsShow = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  console.log(props);

  const renderSelected = () => {
    if (!props.streams) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <ViewLeft />
        <ViewRight />
      </>
    );
  };

  return <div className="view">{renderSelected()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    streams: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamsShow);
