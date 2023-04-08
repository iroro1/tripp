import authReducer from "./authSlice";
import homeSliceReducer from "./homeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { auth: authReducer, home: homeSliceReducer },
});
