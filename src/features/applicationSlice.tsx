import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Grops } from "./groupSlice";
import { ReactNode } from 'react';

export interface User {
  _id: string;
  firstName: string;
  image: string;
  lastName: string;
  number: string;
  email: string;
  password: string;
  age: string;
  posts: string[];
  groups: string[];
  friends: string[];
  __v:number
}

export interface IApplication {
  state: User[];
  error: string | null  |   ReactNode 
  signinUp: boolean;
  signinIn: boolean;
  token: string | null;
  loading: boolean;
}

export const initialState: IApplication = {
  state: [],
  error: null,
  signinUp: false,
  signinIn: false,
  loading: false,
  token: localStorage.getItem("token"),
};

export interface dataSingUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface dataSingIn{
  email:string,
  password: string
}
export const authSignUp = createAsyncThunk<
  Grops,
  dataSingUp,
  { rejectValue: string | unknown | null}
>(
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
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const authSignIn = createAsyncThunk< string | null,dataSingIn,{rejectValue: string | unknown}>(
  "auth/signIn",
  async ({ email, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }

      localStorage.setItem("token", token.token);

      return token.token;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const authSignOut = createAsyncThunk<void,void,{rejectValue: string | null | unknown}>(
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

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    //authSignUp
      .addCase(authSignUp.pending, (state) => {
        state.signinUp = true;
      })
      .addCase(authSignUp.rejected, (state, action: PayloadAction<string | unknown>) => {
        state.signinUp = false;
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state) => {
        state.signinUp = false;
        state.error = null;
      })
      //authSignIn
      .addCase(authSignIn.pending, (state) => {
        state.error = null;
      })
      .addCase(authSignIn.rejected, (state, action: PayloadAction< string | unknown | null > ) => {
        state.signinUp = false;
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signinUp = false;
        state.error = null;
        state.token = action.payload
      })
      .addCase(authSignOut.fulfilled, (state , _)=>{
        state.loading = false
        state.token = null
        state.error = null
      })
      .addCase(authSignOut.pending, (state, _ )=>{
        state.error = null
        state.token = null
        state.loading = true
      })
      .addCase(authSignOut.rejected, (state, action: PayloadAction<string | null | unknown> )=>{
        state.error = action.payload
        state.loading = false
      })
  },
});

export default applicationSlice.reducer;
