/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiURL: string | undefined = import.meta.env.VITE_REACT_APP_BASE_URL;

const baseQueryFn = fetchBaseQuery({
  baseUrl: apiURL,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
});


export const API = createApi({

  reducerPath: 'api',
  baseQuery: baseQueryFn,
  endpoints: (builder) => ({
    getSearch: builder.query<
      {
        items: Array<{ kind: string; id: any; snippet: any }>;
      },
      { searchTerm: string; part: string }
    >({
      query: ({ searchTerm, part }) => ({
        url: `/search?part=${part}&q=${searchTerm}`,
        method: 'GET',
        params: {
          maxResults: '50',
        },
      }),
    }),
  }),
});


export const { useGetSearchQuery } = API;