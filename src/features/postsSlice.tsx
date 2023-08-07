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

  export const createPosts = createAsyncThunk("create/post", async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/post", {
        method: "POST",
        body: JSON.stringify({text}),
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


export const postsSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getPosts.fulfilled, (state, action) => {
          state.userPosts = action.payload;
          state.loading = false;
        })
        .addCase(getPosts.pending, (state, action) => {
            state.loading = true;
          })
        .addCase(createPosts.fulfilled, (state, action) => {
            state.userPosts.push(action.payload)
            state.loading = false
        })
        .addCase(createPosts.pending, (state, action) => {
            state.loading = true
        })
    },
  });
  
  export default postsSlice.reducer;