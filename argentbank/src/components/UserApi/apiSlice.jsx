import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useGetUserQuery } from "../../components/UserApi";
import { useSelector } from "react-redux";

export const forApi = createAsyncThunk("for Api", async () => {
  return await (async () => {
    const token = useSelector((state) => state.user.token);
    const data = useGetUserQuery(token);
    return await data;
  })();
});

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    fulfilled: false,
    data: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(apiSlice.fulfilled, (currentState, action) => {
      return {
        ...currentState,
        forApi: action.payload,
      };
    });
  },
});

export default apiSlice;
/*
export const apiSlice = createSlice({
    name: "api",
    initialState: {
      isLoading: false,
      data: null,
      error: false,
    },
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
      setFirstName: (currentState, action) => {
        const firstName = { ...currentState, firstName: action.payload };
        return firstName;
      },
      setLastName: (currentState, action) => {
        const lastName = { ...currentState, lastName: action.payload };
        return lastName;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(apiSlice.pending, (state, action) => {
      state.isLoading = true;
      });
      builder.addCase(apiSlice.fulfilled, (state, action) => {
          return {
              state.isLoading = false;
              ...state, data = action.payload
          }
      });
      builder.addCase(apiSlice.rejected, (state, action) => {
        state.error = true;
      });
    },
  });
  
  export default apiSlice;
  */
