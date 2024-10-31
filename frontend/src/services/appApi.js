import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

//define a services user a base url

const appApi = createApi({
    reducerPath: 'appApi',
    baseQuery: fetchBaseQuery ({
        baseUrl: 'http://localhost:5001'
    }),
    endpoints: (builder) => ({
        signupUser: builder.mutation({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user,
            }),
        }),
        //Login
        loginUser: builder.mutation({
            query: (user) => ({
                url: 'users/login',
                method: 'POST',
                body: user,
            }),
        }),

        //Logout
        logoutUser: builder.mutation({
            query: (payload) => ({
                url: '/logout',
                method: 'DELETE',
                body: payload,
            }),
        }),
    }),
});

export const {useLoginUserMutation, useSignupUserMutation, useLogoutUserMutation} = appApi;

export default appApi;