import React from "react";
import Posts from "./components/Posts/Posts";

import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="main-heading">FROM AHAVA</h1>
      <p className="tag-line">
        Read More:{" "}
        <a href="https://missretneb.wordpress.com" target="_blank">
          Ahava
        </a>
      </p>
      <Posts />
    </div>
  );
};

export default App;
