import React, { useEffect } from "react";
import "./ViewRightNext.css";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";

const ViewRightNext = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  const renderList = props.streams.slice(1).map((stream, id) => {
    return (
      <div key={id} className="view__right__next__info">
        <img src={stream.imgUrl} alt={stream.title} />

        <div className="view__right__next__all">
          <h5 className="view__right__next__title">
            {stream.title.length > 35 && stream.title.slice(0, 35) + "...."}
          </h5>
          <p className="view__right__next__channel">{stream.channelTitle}</p>
          <p className="view__right__view__description">Description</p>
        </div>

        {id === 0 && <hr />}
      </div>
    );
  });

  return <div>{renderList}</div>;
};
const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, { fetchStreams })(ViewRightNext);
