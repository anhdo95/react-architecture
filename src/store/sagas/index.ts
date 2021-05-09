import { all, call, put, takeEvery } from 'redux-saga/effects';
import { postsActions } from 'store/slices/posts';
import { getPosts } from 'services/posts.service';

export function* fetchPosts() {
  try {
    const posts: any[] = yield call(getPosts);
    yield put(postsActions.setPosts(posts));
  } catch (error) {
    yield put(postsActions.setPosts([]));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(postsActions.fetchPosts.type, fetchPosts)]);
}
