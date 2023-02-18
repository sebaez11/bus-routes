import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '../constants/constanst';
import { ILogin, IAuth } from '../interfaces';

export const authApi = createApi({

    reducerPath: 'authApi',
    
    baseQuery: fetchBaseQuery({ 
        baseUrl: constants.API_URL
    }),
    
    endpoints: (builder) => ({

        login: builder.mutation<IAuth, ILogin>({
            query: (body) => ({
                url: '/admins/auth-with-password',
                method: 'POST',
                body
            })
        })

    })
});

export const { useLoginMutation } = authApi;