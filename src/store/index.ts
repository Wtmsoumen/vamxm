import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "@/store/homeSlice";
import publicContentReducer from "@/store/publicContentSlice";

export const store = configureStore({
  reducer: { home: homeReducer, publicContent: publicContentReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
