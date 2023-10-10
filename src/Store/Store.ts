import { combineReducer, configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";

const rootReducer = combineReducer({
  userReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
