import React, { useEffect, useState } from "react";
import "./VideoDetail.css";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchAPI } from "../fetchAPI";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <div>"Loading..."</div>;
  const { snippet } = videoDetail || {};

  return (
    <div className="video-detail">
      <div className="detail">
        <div className="box">
          <div className="box-detail">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            {snippet && (
              <>
                <h4>{snippet.title}</h4>
                <div className="detail-link">
                  <Link to={`channel/${snippet.channelId}`}>
                    <h5 style={{ color: "#fff" }}>
                      {snippet.channelTitle}
                      <i
                        className="bi bi-check-circle-fill"
                        style={{
                          fontSize: "12px",
                          color: "gray",
                          marginLeft: "5px",
                        }}
                      ></i>
                    </h5>
                  </Link>
                  <div className="stats">
                    <h5>
                      {parseInt(
                        videoDetail.statistics.viewCount
                      ).toLocaleString()}
                      views
                    </h5>
                    <h5>
                      {parseInt(
                        videoDetail.statistics.likeCount
                      ).toLocaleString()}
                      likes
                    </h5>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        {snippet && (
          <div className="related-videos">
            <Videos videos={relatedVideos} overflowY="auto" height="95vh" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
