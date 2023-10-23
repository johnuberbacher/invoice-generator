import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoice/invoiceSlice"
import { pokemonApi } from "../services/pokemon";

export const store = configureStore({
  reducer: {
		invoice: invoiceReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})