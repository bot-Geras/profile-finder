import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/`,
  }),
  tagTypes: ['users'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ['users']
    }),
    getUser: builder.query({
      query: (user) => ({ url: `user/${user.id}`, method: "GET", body: user }),
      providesTags: ['users']
    }),
    updateUser: builder.mutation({
      query: ({ id }) => ({
        url: `user/${id}`,
        method: "PATCH",
        body: id,
      }),
      invalidatesTags: ['users']
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } =
  dataSlice;