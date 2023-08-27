import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Sidebar, Videos } from "./";
import { fetchAPI } from "../fetchAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className="feed">
      <div className="sidebar-box">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <p className="copyright">Copyright 2023, Victor.dev</p>
      </div>
      <div className="videos-box">
        <h2 className="heading">
          {selectedCategory}
          <span style={{ color: "#F31503" }}>videos</span>
        </h2>

        <Videos videos={[videos]} />
      </div>
    </div>
  );
};

export default Feed;
