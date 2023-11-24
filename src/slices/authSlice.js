import { createSlice } from "@reduxjs/toolkit";

const storedAuthState = localStorage.getItem("auth");

const initialState = storedAuthState
  ? JSON.parse(storedAuthState)
  : {
      user: null,
      isUserAuthenticated: false,
    };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload.user;
      state.isUserAuthenticated = true;

      localStorage.setItem("auth", JSON.stringify(state));
    },
    logoutUser: (state, { payload }) => {
      state.user = null;
      state.isUserAuthenticated = false;
      localStorage.removeItem("auth");
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
