import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Sidebar, Videos } from "./";
import { fetchAPI } from "../fetchAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`);
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
          New<span style={{ color: "#F31503" }}>videos</span>
        </h2>

        <Videos videos={[]} />
      </div>
    </div>
  );
};

export default Feed;
