import { configureStore } from "@reduxjs/toolkit";
import StateSlice from "./util/StateSlice";

export const store = configureStore({
  reducer: {
    state: StateSlice,
  },
});
