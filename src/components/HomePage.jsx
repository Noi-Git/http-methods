// import React from 'react'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../App.css";
import BlogPage from "./BlogPage";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const getPost = () => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data);
    });
  };
  useEffect(getPost, []);

  return (
    <section>
      <h1 className="page-header">Welcome to Simple Blog</h1>
      <div className="add-post">
        <button className="add-post-button"> Add Post</button>
      </div>
      {posts.map((post) => {
        return (
          <BlogPage
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
          />
        );
      })}
    </section>
  );
};

export default HomePage;
