import React from "react";
import Post from "../Post/Post";

import "./Posts.css";

const Posts = () => {
  const blogPosts = [
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1551847618-a4b47ff8cec8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1468357161629-c3c530741678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1543046458-2dc399de1692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1519074025331-81dcc0c0ee6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1556484687-30636164638b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80’",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
    {
      title: "LESSONS AT 24",
      image:
        "https://images.unsplash.com/photo-1504194569341-48a2e831a3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      body:
        "At 24, I thought I’d have a job I’m into with UN, a chic condo in a leafy Nairobi estate, a sleek cosy black ride, and a few sparkly carats on my ring finger. Well, a girl can dream…what I have currently are a few simple life nuggets I have collected over the years and would like to share.",
      author: "Miss Dongo",
    },
  ];
  return (
    <div class="posts-container">
      {blogPosts.map((post, i) => (
        <Post post={post} id={i} />
      ))}
    </div>
  );
};

export default Posts;
