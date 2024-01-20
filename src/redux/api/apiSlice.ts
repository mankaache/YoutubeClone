/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiURL: string | undefined = 'https://youtube-v31.p.rapidapi.com';

const baseQueryFn = fetchBaseQuery({
  baseUrl: apiURL,
  headers:{
        'X-RapidAPI-Key': '570d610ccbmshb0bfc07bc3bb27ap15877ajsn389b10a2425a',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      }

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