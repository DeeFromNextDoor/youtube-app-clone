import React from "react";
import "./Sidebar.css";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sidebar">
      {categories.map((category) => (
        <button
          className="category-button"
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          style={{
            backgroundColor: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
        >
          <span>
            <i
              className={category.icon}
              style={{
                color: category.name === selectedCategory ? "white" : "red",
                marginRight: "15px",
              }}
            ></i>
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
