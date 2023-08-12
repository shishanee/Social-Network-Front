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

export const createComment = createAsyncThunk(
  "create/comment",
  async ({ text, image, postId }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("img", image[0]);
      formData.append("img", image[1]);
      formData.append("img", image[2]);
      formData.append("img", image[3]);
      formData.append("text", text);
      const res = await fetch(`http://localhost:4000/comment/${postId}`, {
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
)

export const deleteComment = createAsyncThunk(
  "delete/comment",
  async ({ id }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/comment/${id}`, {
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

export const addLike = createAsyncThunk(
  "add/like",
  async ({ userId, commentId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/comment/like/${commentId}`, {
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
      // .addCase(getAllComments.pending, (state) => {
      //   state.loading = true
      // })
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments.unshift(action.payload);
        state.loading = false;
      })
      .addCase(createComment.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments.filter((item) => item._id !== action.meta.arg);
        state.loading = false
      })
      .addCase(deleteComment.pending, (state, action) => {
        state.loading = true
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.comments.map((item) => {
          if (item.user === action.meta.arg.userId) {
            item.likes.push(action.meta.arg.userId);
          }
        });
        state.loading = false
      })
      .addCase(addLike.pending, (state, action) => {
        state.loading = true;
      })
        // .addCase(getPostComments.fulfilled, (state, action) => {
        //   state.postComments = action.payload
        //   .reverse();
        //   state.loading = false;
        // })
    },
});

export default commentSlice.reducer;