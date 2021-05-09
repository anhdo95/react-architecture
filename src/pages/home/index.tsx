import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { postsActions, selectPosts } from 'store/slices/posts';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(postsActions.fetchPosts());
  }, [dispatch]);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.objectID}>
          <h3>{post.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default Home;
