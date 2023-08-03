import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ReactNode } from "react";

export interface User {
  age: string;
  email: string;
  firstName: string;
  followers: string[];
  friends: string[];
  groups: string[];
  image?: string;
  lastName: string;
  number: string;
  password: string;
  posts: string[];
  __v: number;
  _id: string;
}

export interface UserState {
  user: User[];
  users: User[];
  friends: User[];
  loading: boolean;
  error: ReactNode | string | null | unknown
}

export const initialState: UserState = {
  user: [], 
  users: [],
  friends: [],
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk<User[], void, { state: RootState }>(
  "get/user",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
      });
      const data = await res.json();

      return data;
    } catch (error: string | unknown | null) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const allUsers = createAsyncThunk<User[],void,{rejectValue: string | unknown | null}>("all/users", async (_, ) => {
  const res = await fetch("http://localhost:4000/users");
  const data = res.json();
  return data;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.user = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(getUser.pending, (state, _) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(
        getUser.rejected,
        (state, action: PayloadAction<string | null | unknown>) => {
          (state.error = action.payload), (state.loading = false);
        })
      .addCase(allUsers.fulfilled, (state, action :PayloadAction<User[]>) => {
        state.users = action.payload;
        state.error = null 
        state.loading = false
      })
      .addCase(allUsers.rejected ,(state, action:PayloadAction<string | unknown | null>)=>{
        state.error = action.payload
        state.loading = false
      })
      .addCase(allUsers.pending, (state, _ )=>{
        state.error = null
        state.loading = true
      })
  },
});

export default userSlice.reducer;
