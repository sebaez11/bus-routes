import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '../constants/constanst';
import { RootState } from '../store/store';

export const routesApi = createApi({

    reducerPath: 'routesApi',
    
    baseQuery: fetchBaseQuery({ 
        baseUrl: constants.API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', `Beasrer ${token}`);
            }
            return headers;
        }, 
    }),
    
    endpoints: (builder) => ({

        getRoutes: builder.query({
            query: () => 'bus_stops',
        }),

    }),

});

export const { useGetRoutesQuery } = routesApi;