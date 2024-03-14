import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ data }) => {
  const { title, id } = data;
  const navigate = useNavigate();

  const handleSeeDetails = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="border-2 m-4 rounded-md p-4 border-yellow-400">
      <h1>{id}</h1>
      <h1>{title}</h1>
      <button className="bg-blue-500 text-white rounded-md p-2 m-2">
        <Link to={`/posts/${id}`}>See Details</Link>
      </button>
      or
      <button className="bg-blue-500 text-white rounded-md p-2 m-2" onClick={handleSeeDetails}>See More</button>
    </div>
  );
};

export default Post;
