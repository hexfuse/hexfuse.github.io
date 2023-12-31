import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  accessToken: undefined,
  persist: localStorage.getItem("persist") === "true",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addPersist: (state, action) => {
      state.persist = action.payload;
    },
  },
});

export const { addUser, addAccessToken, addPersist } = userSlice.actions;

export default userSlice.reducer;
