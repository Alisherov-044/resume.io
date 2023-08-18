import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";

const store = configureStore({
  reducer: {
    layout: layoutSlice,
  },
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;
export default store;
