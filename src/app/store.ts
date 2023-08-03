import { configureStore } from "@reduxjs/toolkit";
import group from "../features/groupSlice";
import application from "../features/applicationSlice";
import user from "../features/userSlice";

export const store = configureStore({
  reducer: {
    group,
    application,
    user,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
