import React from 'react';
import { Link } from 'react-router-dom';

const Posts: React.FC = () => {
  return (
    <div>
      Posts
      <hr />
      <Link to="/posts/create">Create a new post</Link>
    </div>
  );
};

export default Posts;
