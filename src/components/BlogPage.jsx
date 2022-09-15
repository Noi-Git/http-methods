import React from "react";
import { Link } from "react-router-dom";

const BlogPage = ({ id, title, description }) => {
  return (
    <article className="blog">
      <h1 className="blog-title"> {title} </h1>
      <p className="blog-description">
        {description.split(" ").splice(0, 60).join(" ")}
      </p>
      <Link to={`/detail?id=${id}`}>Read more...</Link>
    </article>
  );
};

export default BlogPage;
