import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '../constants/constanst';
import { IAuth } from '../interfaces';

export const authApi = createApi({

    reducerPath: 'authApi',
    
    baseQuery: fetchBaseQuery({ 
        baseUrl: constants.API_URL
    }),
    
    endpoints: (builder) => ({

        login: builder.mutation<IAuth, IAuth>({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            })
        })

    })
});

export const { useLoginMutation } = authApi;