import { configureStore } from "@reduxjs/toolkit";
import group from "../features/group.slice";

export const store = configureStore({
  reducer: {
    group,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
