/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {ChannelDetails} from '../../types/channelDetails'

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

    getChannel: builder.query<
      {
        items: {
          items: ChannelDetails;
        };
      },
      { id: string; part: string }
    >({
      query: ({ id, part }) => ({
        url: `/channels?part=${part}&id=${id}`,
        method: 'GET',
      }),
    }),

    getChannelVideos: builder.query<
      {
          kind: 'string';
          items: Array<{ kind: string; id: any; snippet: any }>;
      },
      { channelId: string; part: string }
    >({
      query: ({ channelId, part }) => ({
        url: `/search?channelId=${channelId}&part=${part}`,
        method: 'GET',
        params: {
          order: 'date',
          maxResults: '50',
        },
      }),
    }),
  }),
});


export const { useGetSearchQuery, useGetChannelQuery, useGetChannelVideosQuery } = API;