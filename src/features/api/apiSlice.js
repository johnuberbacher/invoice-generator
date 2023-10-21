import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_BASE_URL }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `invoices`,
			transformResponse: (response, meta, arg) => response.data
    }),
  }),
})

// Export hooks for usage in functional components
export const { useGetPokemonByNameQuery } = pokemonApi
