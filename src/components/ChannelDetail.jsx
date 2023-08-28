import React, { useEffect, useState } from "react";
import "./ChannelDetail.css";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../fetchAPI";
import ChannelCard from "./ChannelCard";
import { Videos } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
    <div className="channel-detail">
      <div className="gradient-box" />
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      <div className="channel-videos">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
