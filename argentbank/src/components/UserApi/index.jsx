import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (token) => ({
        url: `api/V1/user/profile`,
        method: `POST`,
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json;charset=utf-8",
        },
      }),
    }),

    getToken: builder.mutation({
      query: (postData) => ({
        url: `api/V1/user/login`,
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
      }),
    }),
  }),
});

export const { useGetUserQuery, useGetTokenMutation } = api;
