import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import postsReducer from '../features/posts/postsSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;