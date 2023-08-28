import React, { useEffect, useState } from "react";
import "./ChannelDetail";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../fetchAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
      setVideos(data?.items[0])
    );
  }, [id]);

  return <div className="channel-detail">{id}</div>;
};

export default ChannelDetail;
