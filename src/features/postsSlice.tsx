import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  userPosts: [],
  post: [],
  loading: false,
  allPosts: [],
  onePost: [],
  onePostUser: [],
};

export const getOnePost = createAsyncThunk("one/post", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/onepost/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const allPosts = createAsyncThunk("all/posts", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/allposts");
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

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

export const deletePost = createAsyncThunk(
  "delete/post",
  async ({ postId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/post/${postId}`, {
        method: "DELETE",
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
  }
);

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allPosts.fulfilled, (state, action) => {
        state.allPosts = action.payload;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.userPosts = action.payload.reverse();
        state.loading = false;
      })
      // .addCase(getPosts.pending, (state, action) => {
      //   state.loading = true;
      // })
      .addCase(createPosts.fulfilled, (state, action) => {
        // state.userPosts.unshift(action.payload);
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
        state.allPosts.map((item) => {
          if (item.user === action.meta.arg.userId) {
            item.likes.push(action.meta.arg.userId);
          }
        });
        state.loading = false;
      })
      .addCase(addLike.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.userPosts.filter((item) => item._id !== action.meta.arg.postId);
      })
      .addCase(deletePost.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOnePost.fulfilled, (state, action) => {
        state.onePost = action.payload;
        state.onePostUser = action.payload.user;
      });
  },
});

export default postsSlice.reducer;
