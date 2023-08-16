import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ReactNode } from "react";
import { Action } from "@remix-run/router";

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
  favorite: string[];
}

export interface UserState {
  user: User[];
  users: User[];
  friends: User[];
  followers: User[];
  oneUser: User[];
  oneUserFollow: User[];
  oneUserFriends: User[];
  loading: boolean;
  error: ReactNode | string | null | unknown;
  favorite: string[];
  groups: string[];
}

export const initialState: UserState = {
  user: [],
  users: [],
  friends: [],
  followers: [],
  groups: [],
  posts: [],
  images: [],
  loading: false,
  error: null,
  oneUser: [],
  oneUserFollow: [],
  oneUserFriends: [],
  oneUserGroup: [],
  favorite: [],
};

export const editImage = createAsyncThunk(
  "edit/image",
  async (img, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("img", img[0]);
      const res = await fetch("http://localhost:4000/editImage", {
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

export const oneUser = createAsyncThunk("one/user", async (id, thunkAPI) => {
  try {
    const res = await fetch(`http://localhost:4000/user/${id}`);
    const data = await res.json();
    return data;
  } catch (error: string | unknown | null) {
    thunkAPI.rejectWithValue(error);
  }
});

export const unFollow = createAsyncThunk("un/follow", async (id, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/deletefriends", {
      method: "PATCH",
      body: JSON.stringify({ followers: id }),
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
});

export const deleteUser = createAsyncThunk(
  "delete/user",
  async (id, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/deletefollow", {
        method: "PATCH",
        body: JSON.stringify({ friends: id }),
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

export const followUser = createAsyncThunk(
  "follow/user",
  async (id, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/addfollow", {
        method: "PATCH",
        body: JSON.stringify({ friends: id }),
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
export const getPostsAll = createAsyncThunk(
  "get/postsAll",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/getposts/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

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

export const changeUser = createAsyncThunk<
  User[],
  void,
  { rejectValue: string | unknown | null }
>(
  "change/user",
  async (
    { editName, editSurname, editNumber, editEmail, editAge },
    thunkAPI
  ) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "PATCH",
        body: JSON.stringify({
          firstName: editName,
          lastName: editSurname,
          number: editNumber,
          email: editEmail,
          age: editAge,
        }),
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

export const GetUserFavorite = createAsyncThunk(
  "favorite/get",
  async (_, thunkAPI) => {
    const res = await fetch("http://localhost:4000/favorite/get", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const data = await res.json();
    return data;
  }
);

export const allUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string | unknown | null }
>("all/users", async (_) => {
  const res = await fetch("http://localhost:4000/users");
  const data = await res.json();
  return data;
});

export const deleteFavorite = createAsyncThunk(
  "favorite/delete",
  async (id, thunkAPI) => {
    const res = await fetch('http://localhost:4000/favorite/delete', {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
      body: JSON.stringify({
        favorite: id
      })
    })
    const data = await res.json();
    return data;
  }
);

export const addFavorit = createAsyncThunk('/favorite/add', async (id, thunkAPI) => {
  const res = await fetch('http://localhost:4000/favorite',{
    method: 'PATCH',
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${thunkAPI.getState().application.token}`,
    },
    body: JSON.stringify({
      favorite: id
    })
  })
  const data = await res.json()
  return data
})

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.user = action.payload;
        state.followers = action.payload.followers;
        state.friends = action.payload.friends;
        state.groups = action.payload.groups;
        state.images = action.payload.images;
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
      .addCase(allUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
      })
      .addCase(changeUser.fulfilled, (state, action) => {
        state.user.firstName = action.meta.arg.editName;
        state.user.lastName = action.meta.arg.editSurname;
        state.user.number = action.meta.arg.editNumber;
        state.user.age = action.meta.arg.editAge;
      })
      .addCase(
        allUsers.rejected,
        (state, action: PayloadAction<string | unknown | null>) => {
          state.error = action.payload;
          state.loading = false;
        }
      )
      .addCase(editImage.fulfilled, (state, action) => {

        state.user = action.payload;
      })
      .addCase(allUsers.pending, (state, _) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(oneUser.fulfilled, (state, action) => {
        state.oneUser = action.payload;
        state.oneUserFollow = action.payload.followers;
        state.oneUserFriends = action.payload.friends;
        state.oneUserGroup = action.payload.groups;
      })
      .addCase(getPostsAll.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(GetUserFavorite.fulfilled, (state, action) => {
        state.favorite = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(deleteFavorite.fulfilled, (state, action)=>{
        state.favorite = action.payload
      })
      .addCase(addFavorit.fulfilled, (state, action)=>{
        state.favorite = action.payload
      })
  },
});

export default userSlice.reducer;
