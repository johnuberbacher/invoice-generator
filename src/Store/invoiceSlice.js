import { createSlice } from '@reduxjs/toolkit';

export const invoiceSlice = createSlice({
  name: 'invoice',
  initialState:{
    invoices:[]
  },
  reducers: {
    addInvoice: (state, action) => {
        const { invoiceNumber } = action.payload;
        const existingInvoiceIndex = state.invoices.findIndex(
          (invoice) => invoice.invoiceNumber === invoiceNumber
        );
        if (existingInvoiceIndex !== -1) {
          state.invoices[existingInvoiceIndex] = action.payload;
        } else {
          state.invoices.push(action.payload);
        }

    },
    deleteInvoice:(state,action)=>{
        const updatedInvoices = state.invoices.filter(
            (invoice) => invoice.invoiceNumber !== action.payload
          );
          return {
            ...state,
            invoices: updatedInvoices,
          };
    },
    // editInvoice: (state, action) => {
    //   const updatedInvoices = state.invoices.map((invoice) => {
    //     if (invoice.invoiceNumber === action.payload.invoiceNumber) {
    //       return {
    //         ...invoice,
    //         // Update properties you want to change
    //         currentDate: action.payload.currentDate,
    //         billTo: action.payload.billTo,
    //         // ... add other properties you want to update
    //       };
    //     }
    //     return invoice;
    //   });
    
    //   return {
    //     ...state,
    //     invoices: updatedInvoices,
    //   };
    // },    
  }
});
export const {addInvoice,deleteInvoice} = invoiceSlice.actions;
export default invoiceSlice.reducer;

// editInvoice: (state, action) => {
//   const updatedInvoices = state.invoices.map((invoice) => {
//     if (invoice.invoiceNumber === action.payload.invoiceNumber) {
//       return {
//         ...invoice,
//         // Update properties you want to change
//         currentDate: action.payload.currentDate,
//         billTo: action.payload.billTo,
//         // ... add other properties you want to update
//       };
//     }
//     return invoice;
//   });

//   return {
//     ...state,
//     invoices: updatedInvoices,
//   };
// },
// dispatch(editInvoice({
//   invoiceNumber: 123,
//   currentDate: '2024-01-17',
//   billTo: 'Updated Bill To',
//   // ... other properties to update
// }));

