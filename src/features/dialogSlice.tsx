import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  dialog: [],
  oneChat: [],
  dialogId: "",
  loading: false,
};

export const deleteDialog = createAsyncThunk(
  "delete/dialog",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/dialogdelete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const createDialog = createAsyncThunk(
  "create/dialog",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/createdialog`, {
        method: "POST",
        body: JSON.stringify({ user: id }),
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

export const getDialog = createAsyncThunk("get/dialog", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/getdialogs");
    const data = await res.json();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

export const addMessage = createAsyncThunk(
  "add/message",
  async ({ id, text }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/addmessage/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ text: text }),
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
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.oneChat[0] = action.payload;
      })
      .addCase(createDialog.fulfilled, (state, action) => {
        state.dialogId = action.payload;
        state.dialog = action.payload;
      })
      .addCase(deleteDialog.fulfilled, (state, action) => {
        state.dialog = state.dialog.map((item) => {
          if (item._id !== action.payload._id) {
            return item;
          }
          return item;
        });
      });
  },
});

export default dialogSlice.reducer;
