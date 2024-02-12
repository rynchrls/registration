import { configureStore } from "@reduxjs/toolkit";
import methodReducer from "./httpMethodSlice";


// state manager
export const store = configureStore({
  reducer: {
    getMethod: methodReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false 
  }),
});
