import React from "react";

import "./Post.css";

const Post = (props) => {
  return (
    <div className="post-container">
      <div className="single-post">
        <h1 className="post-heading">{props.post.title}</h1>
        <img src={props.post.image} className="image" alt="post" />
        <p>
          {props.post.body}&nbsp;
          <a href="#" className="btn">
            Read more
          </a>
        </p>
        <div className="info">
          <h5>Article No: {props.id + 1}</h5>
          <h4>Author: {props.post.author}</h4>
        </div>
      </div>
    </div>
  );
};

export default Post;
