import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  group: [],
};

export const getGroups = createAsyncThunk("get/group", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/group");
    const data = await res.json();

    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroups.fulfilled, (state, action) => {
      state.group = action.payload;
    });
  },
});

export default groupSlice.reducer;
