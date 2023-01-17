import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const dataSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl:  `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/`,
        
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query:() => "users",
        })
    })
})

export const {useGetUsersQuery} = dataSlice