import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllPosts, fetchPostById } from './postsAPI';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchAllPosts();
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const fetchPostDetail = createAsyncThunk(
  'posts/fetchPostDetail',
  async (postId, { rejectWithValue }) => {
    try {
      const data = await fetchPostById(postId);
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    selectedPost: null,
    status: 'idle',
    detailStatus: 'idle',
    error: null,
    detailError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchPostDetail.pending, (state) => {
        state.detailStatus = 'loading';
        state.detailError = null;
        state.selectedPost = null;
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.detailStatus = 'succeeded';
        state.selectedPost = action.payload;
      })
      .addCase(fetchPostDetail.rejected, (state, action) => {
        state.detailStatus = 'failed';
        state.detailError = action.payload || action.error.message;
      });
  },
});

export default postsSlice.reducer;