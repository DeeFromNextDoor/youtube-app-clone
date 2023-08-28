import React, { useEffect } from "react";
import "./Videos.css";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
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
