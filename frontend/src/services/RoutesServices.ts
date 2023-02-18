import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { constants } from '../constants/constanst';
import { RootState } from '../store/store';

export const routesApi = createApi({

    reducerPath: 'routesApi',
    
    baseQuery: fetchBaseQuery({ 
        baseUrl: constants.API_URL,
        prepareHeaders: (headers, { getState }) => {
            const access_token = (getState() as RootState).auth.token;
            if (access_token) {
                headers.set('authorization', `Bearer ${access_token}`);
            }
            return headers;
        }, 
    }),
    
    endpoints: (builder) => ({

        getRoutes: builder.query({
            query: () => 'bus_stops',
        }),

        getAllRoutes: builder.query<any, any>({
            query: () => 'collections/routes/records',
        }),

    }),

});

export const { 
    useGetRoutesQuery,
    useGetAllRoutesQuery,
 } = routesApi;