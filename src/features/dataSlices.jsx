import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const dataSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://touchinspiration-0ada.restdb.io/rest/sample',
        prepareHeaders(headers) {
            headers.set("-api-key", "63be7360969f06502871ad7f")
            
            return headers
        }
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query:() => "/users",
        })
    })
})

export const {useGetUsersQuery} = dataSlice