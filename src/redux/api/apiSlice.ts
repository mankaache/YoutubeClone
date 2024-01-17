/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiURL: string | undefined = process.env.REACT_APP_BASE_URL;


const headers: HeadersInit | undefined =
  process.env.REACT_APP_RAPID_API_KEY && process.env.REACT_APP_RAPID_API_HOST
    ? {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
      }
    : undefined;

const baseQueryFn = fetchBaseQuery({
  baseUrl: apiURL,
  headers,
});


export const API = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryFn,

  endpoints: (builder)=> ({

    search: builder.query<
    {
        data:{[key:string]:any}
    },{
        searchTerm:string,
        part:string
    }>({
        query: ({searchTerm, part}) => ({
            url:`/search?part=${part}&q=${searchTerm}/`,
            method:'GET',
            params:{
                searchTerm,
                part,
                maxResults: '50'
            }

        }),
    })
  })
});


export const { useSearchQuery } = API;