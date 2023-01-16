import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const dataSlice = createApi({
    reducerPath:"63be7360969f06502871ad7f",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://touchinspiration-0ada.restdb.io/rest/sample'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query:() => "/users",
        })
    })
})

export const {useGetUsersQuery} = dataSlice