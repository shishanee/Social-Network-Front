import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  postComments: [],
  comments: [],
  loading: false,
};


export const getAllComments = createAsyncThunk("get/allComments", async (_, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:4000/comment/all`);
        const data = await res.json();
        return data
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})
// export const getPostComments = createAsyncThunk("get/postComment", async ({postId}, thunkAPI) => {
//     try {
//       const res = await fetch(`http://localhost:4000/comment/${postId}`, {
//         method: "GET",
//         body: JSON.stringify(),
//         headers: {
//           "Content-type": "application/json",
//           Authorization: `Bearer ${thunkAPI.getState().application.token}`,
//         },
//       });
//       const data = await res.json();
//       return data;
//     } catch (error) {
//       thunkAPI.rejectWithValue(error);
//     }
//   });

  export const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getAllComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.loading = false;
      })
      .addCase(getAllComments.pending, (state, action) => {
        state.loading = true
      })
        // .addCase(getPostComments.fulfilled, (state, action) => {
        //   state.postComments = action.payload
        //   .reverse();
        //   state.loading = false;
        // })
    },
});

export default commentSlice.reducer;