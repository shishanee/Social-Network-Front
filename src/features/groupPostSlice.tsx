import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const initialState = {
    groupPosts: [],
    posts: [],
    loading: false,
    error: null
} 

export const postInGroupById = createAsyncThunk(
  "postByid/group",
  async(groupId, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/groupost/${groupId}`);
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
)

export const postInGroup = createAsyncThunk(
    "post/group",
    async({groupId, text, image}, thunkAPI) => {
        console.log(image);
        
      try {
        const formData = new FormData();
        formData.append("img", image[0]);
        formData.append("img", image[1]);
        formData.append("img", image[2]);
        formData.append("img", image[3]);
        formData.append("text", text);
        const res = await fetch(`http://localhost:4000/group/post/${groupId}`, {
          method: "POST",
          body: formData,
        });
  
        const data = await res.json();
        return data;
   
      } catch (error) {
        thunkAPI.rejectWithValue(error)
      }
    }
  );

  export const groupPostSlice = createSlice({
    name: "groupPost",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(postInGroup.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(postInGroup.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(postInGroup.fulfilled, (state, action) => {
            state.loading =false;
            state.posts = action.payload;
          })
          .addCase(postInGroupById.pending, (state, action) => {
            state.loading = true;
          })
          .addCase(postInGroupById.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
          })
          .addCase(postInGroupById.fulfilled, (state, action) => {
            state.loading = false;
            state.groupPosts = action.payload.posts
          })
    }
    }
  );

  export default groupPostSlice.reducer;