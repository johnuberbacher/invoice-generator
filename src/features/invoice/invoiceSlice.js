import { createSlice } from "@reduxjs/toolkit";

const intialState = {
	// set intial state here
	invoice: []
}

const reducers = {
	// action creators will be auto generated for the reducers
	addInvoice: (state, action) => {
		state.invoice.push(action.payload)
	},
	updateInvoice: (state, action) => {

	},
	deleteInvoice: (state, action) => {

	}
}

export const invoiceSlice = createSlice({
	name: "invoice",
  initialState: intialState,
  reducers: reducers,
})

export const { addInvoice, updateInvoice, deleteInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;