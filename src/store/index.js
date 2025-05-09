import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlicer";

export const store = configureStore({
  reducer: {
    productSlice: productReducer,
  },
});
