import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dialog: [],
  oneChat: [],
  loading: false,
};

export const getDialog = createAsyncThunk("get/dialog", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/getdialogs");
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const oneDialog = createAsyncThunk(
  "one/dialog",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/onedialog/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDialog.fulfilled, (state, action) => {
        state.dialog = action.payload;
      })
      .addCase(oneDialog.fulfilled, (state, action) => {
        state.oneChat = action.payload;
        state.loading = false;
      })
      .addCase(oneDialog.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default dialogSlice.reducer;
