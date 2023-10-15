import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../features/invoice/invoiceSlice"

export default configureStore({
	reducer: {
    invoice: invoiceReducer
  }
})