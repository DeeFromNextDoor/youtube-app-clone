import React, { useEffect, useState } from "react";
import { Videos } from "./";
import { fetchAPI } from "../fetchAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <div className="SearchFeed">
      <div className="videos-box">
        <h2 className="heading" style={{ color: "#fff" }}>
          Search results for:
          <span style={{ color: "#F31503" }}> {searchTerm}</span>videos
        </h2>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
