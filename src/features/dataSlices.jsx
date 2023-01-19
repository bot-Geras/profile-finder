// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const dataSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/`,
//   }),
//   tagTypes: ["users"],
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => "users",
//       transformResponse: res => res.sort((a,b) => b.id - a.id),
//       providesTags: ["users"],
//     }),
//     createUser: builder.mutation({
//       query: (user) => ({ url: `user/${user.id}`, method: "Post", body: user }),
//       invalidatesTags: ["users"]
//     }),
//     updateUser: builder.mutation({
//       query: (user) => ({
//         url: `user/${user.id}`,
//         method: "PATCH",
//         body: user,
//       }),
//       invalidatesTags: ["users"]
//     }),
//     deleteUser: builder.mutation({
//       query: ({ id }) => ({
//         url: `user/${id}`,
//         method: "DELETE",
//         body: id,
//       }),
//       invalidatesTags: ["users"]
//     }),
//   }),
// });

// export const { useGetUsersQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } =
//   dataSlice;
