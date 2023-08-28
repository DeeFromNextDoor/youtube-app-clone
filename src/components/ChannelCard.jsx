import React from "react";
import "./ChannelCard.css";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="channel-card">
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="channel-content">
          <img
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
          />
          <h6>
            {channelDetail?.snippet?.title}
            <i
              className="bi bi-check-circle-fill"
              style={{
                marginLeft: "5px",
                fontSize: "12px",
              }}
            ></i>
          </h6>
          {channelDetail?.statistics?.subscriberCount && (
            <h6>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}
              Subscribers
            </h6>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ChannelCard;
