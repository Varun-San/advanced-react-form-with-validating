import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../userSlices/userSlices";

const store = configureStore({
  reducer: {
    usersInfo: userReducer,
  },
});

export default store;
