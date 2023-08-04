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
  users: User[];
  friends: User[];
  loading: boolean;
  error: null | string | unknown;
}

const initialState: UserState = {
  user: [],
  users: [],
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

export const changeUser = createAsyncThunk<
User[],
void,
{ rejectValue: string | unknown | null } >
("change/user", async ({editName, editSurname, editNumber, editEmail, editAge}, thunkAPI) => {
  
  try {
    const res = await fetch("http://localhost:4000/user",
     {
      method: "PATCH",
      body: JSON.stringify({
        firstName: editName, 
        lastName: editSurname, 
        number: editNumber, 
        email: editEmail, 
        age: editAge}),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const data = await res.json();
    return data
  } catch (error) {
    thunkApi.rejectWithValue(error)
  }
})

export const allUsers = createAsyncThunk("all/users", async (_, ThunkAPI) => {
  const res = await fetch("http://localhost:4000/users");
  const data = res.json();
  return data;
});
const userSlice = createSlice({
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
        }
      )
      .addCase(allUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(changeUser.fulfilled, (state, action) => {
       state.user.firstName = action.meta.arg.editName;
       state.user.lastName = action.meta.arg.editSurname;
       state.user.number = action.meta.arg.editNumber;
       state.user.age = action.meta.arg.editAge
      })
  },
});

export default userSlice.reducer;
