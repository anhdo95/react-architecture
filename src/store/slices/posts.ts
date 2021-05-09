import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface PostsState {
  posts: any[];
}

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPosts() {},
    setPosts(state, action: PayloadAction<any[]>) {
      state.posts = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;

export const postsActions = postsSlice.actions;

// Selectors
export const selectPosts = (state: RootState) => state.posts.posts;
