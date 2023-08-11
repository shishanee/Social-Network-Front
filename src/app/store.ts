import { configureStore } from "@reduxjs/toolkit";
import group from "../features/groupSlice";
import application from "../features/applicationSlice";
import user from "../features/userSlice";
import dialog from "../features/dialogSlice";
import posts from "../features/postsSlice";
import comments from "../features/commentsSlice";
import image from "../features/imageSlice";

export const store = configureStore({
  reducer: {
    group,
    application,
    user,
    dialog,
    posts,
    comments,
    image,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
