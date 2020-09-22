import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";
const VideoList = ({ onVideoSelect, streams }) => {
  const renderStreams = streams.map((stream, index) => {
    return (
      <VideoItem key={index} onVideoSelect={onVideoSelect} stream={stream} />
    );
  });

  return <div className="video__list">{renderStreams}</div>;
};

export default VideoList;
