import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  posts: [],
  loading: false,
  error: null,
  successMessage: '',
};

// Async thunk for creating a post
export const createPost = createAsyncThunk(
  'posts/createPost',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:4000/create-post', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    clearSuccessMessage: (state) => {
      state.successMessage = '';
    },
    clearErrorMessage: (state) => {
        state.error = null;
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
        state.successMessage = 'Post Created Successfully!';
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create post';
      });
  },
});

export const { clearSuccessMessage, clearErrorMessage } = postSlice.actions;

export default postSlice.reducer;
