import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "all data",
  initialState: { token: null, user: null, email: null, id: null },
  reducers: {
    setToken: (currentState, action) => {
      const token = { ...currentState, token: action.payload };
      return token;
    },

    setUser: (currentState, action) => {
      const user = { ...currentState, user: action.payload };
      return user;
    },

    setEmail: (currentState, action) => {
      const email = { ...currentState, email: action.payload };
      return email;
    },

    setId: (currentState, action) => {
      const id = { ...currentState, id: action.payload };
      return id;
    },
  },
});
