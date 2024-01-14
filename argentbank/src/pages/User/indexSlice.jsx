import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "change username",
  initialState: { token: null, user: null, email: null, id: null },
  reducers: {
    setUser: (currentState, action) => {
      const user = { ...currentState, user: action.payload };
      return user;
    },
  },
});
