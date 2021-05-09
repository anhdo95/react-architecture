import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { postsActions, selectPosts } from 'store/slices/posts';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  useEffect(() => {
    dispatch(postsActions.setPosts([{ id: 122, title: 'The react architecture' }]));
  }, []);

  console.log('posts :>> ', posts);

  return <div>Home</div>;
};

export default Home;
