import React from "react";
import "./Videos.css";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, overflowY, height, maxWidth }) => {
  if (videos === null) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="videos"
      style={{
        height: height,
        overflowY: overflowY,
        maxWidth: maxWidth,
      }}
    >
      {videos.map((item, idx) => {
        return (
          <div className="video" key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
