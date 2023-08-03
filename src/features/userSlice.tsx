import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface User {
  age: string;
  email: string;
  firstName: string;
  followers: string[];
  friends: string[];
  groups: string[];
  image: string;
  lastName: string;
  number: string;
  password: string;
  posts: string[];
  __v: number;
  _id: string;
}

export interface UserState {
  user: User[];
  friends: User[];
  loading: boolean;
  error: null | string | unknown;
}

const initialState: UserState = {
  user: [],
  friends: [],
  loading: false,
  error: null,
};

export const getUser = createAsyncThunk<
  User[],
  void,
  { rejectValue: string | unknown | null }
>("get/user", async (_, thunkAPI) => {
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
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action:PayloadAction<User[]>) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
