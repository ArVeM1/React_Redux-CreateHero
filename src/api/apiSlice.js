import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  tagTypes: ['Heroes'],
  endpoints: (build) => ({
    getHeroes: build.query({
      query: () => '/heroes',
      providesTags: ['Heroes'],
    }),
    createHero: build.mutation({
      query: (hero) => ({
        url: '/heroes',
        method: 'POST',
        body: hero,
      }),
      invalidatesTags: ['Heroes'],
    }),
    deleteHero: build.mutation({
      query: (id) => ({
        url: `/heroes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Heroes'],
    }),
  }),
});

export const { useGetHeroesQuery, useCreateHeroMutation, useDeleteHeroMutation } = apiSlice;
