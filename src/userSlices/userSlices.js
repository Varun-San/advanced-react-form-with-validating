import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { setUsers } = userSlice.actions; // Exports the Actions that is dispatch

export default userSlice.reducer; // It will export this into a single reducers
