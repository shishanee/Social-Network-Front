import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userPosts: [],
  post: [],
  loading: false,
};

export const getPosts = createAsyncThunk("get/post", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/post", {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const createPosts = createAsyncThunk(
  "create/post",
  async ({ text, image }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("img", image[0]);
      formData.append("img", image[1]);
      formData.append("img", image[2]);
      formData.append("img", image[3]);
      formData.append("text", text);
      const res = await fetch("http://localhost:4000/post", {
        method: "POST",
        body: formData,
        headers: {
          //   "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addLike = createAsyncThunk(
  "add/message",
  async ({ userId, postId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/post/like/${postId}`, {
        method: "PATCH",
        body: JSON.stringify({ userId }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.userPosts = action.payload.reverse();
        state.loading = false;
      })
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        state.userPosts.unshift(action.payload);
        state.loading = false;
      })
      .addCase(createPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.userPosts.map((item) => {
          if (item.user === action.meta.arg.userId) {
            item.likes.push(action.meta.arg.userId);
          }
        });
      });
  },
});

export default postsSlice.reducer;
