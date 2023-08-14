import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  images: [],
  oneImages: [],
};

export const allImages = createAsyncThunk(
  "all/images",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/allimages", {
        method: "GET",
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

export const onePeopleImages = createAsyncThunk(
  "one/images",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/onepeopleimage/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addImage = createAsyncThunk(
  "add/image",
  async ({ image }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("img", image[0]);
      const res = await fetch("http://localhost:4000/addimage", {
        method: "PATCH",
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

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allImages.fulfilled, (state, action) => {
        state.images = action.payload;
      })
      .addCase(addImage.fulfilled, (state, action) => {
        state.images = action.payload;
      })
      .addCase(onePeopleImages.fulfilled, (state, action) => {
        state.oneImages = action.payload;
      });
  },
});

export default imageSlice.reducer;
