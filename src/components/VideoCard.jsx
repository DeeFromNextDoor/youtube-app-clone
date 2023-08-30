import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video;

  return (
    <div className="video-cards">
      <Link
        to={videoId ? `/video/${videoId}` : demoVideoUrl}
        className="video-container"
      >
        <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
      </Link>
      <div className="media-content">
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <h5>{snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 6)}</h5>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <h5 style={{ color: "gray" }}>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 6)}
            <i
              className="bi bi-check-circle-fill"
              style={{ marginLeft: "5px", fontSize: "12px" }}
            ></i>
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;
