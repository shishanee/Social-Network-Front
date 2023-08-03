import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IApplication {
  error: string | null | unknown;
  signinUp: boolean;
  signinIn: boolean;
  token: string;
}

const initialState = {
  error: null,
  signinUp: false,
  signinIn: false,
  token: localStorage.getItem("token"),
};

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/auth", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password }),
        headers: {
          "Content-type": "application/json",
        },
      });

      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }

      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const authSignIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ number, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }

      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authSignOut = createAsyncThunk(
  "auth/signout",
  async (_, thunkAPI) => {
    try {
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.signinUp = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signinUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.signinUp = false;
        state.error = null;
      })
      .addCase(authSignIn.pending, (state) => {
        state.error = null;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.signinUp = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signinUp = false;
        state.error = null;
        state.token = action.payload;
      });
  },
});

export default applicationSlice.reducer;
