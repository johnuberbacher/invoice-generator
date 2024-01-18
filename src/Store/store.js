import { configureStore } from '@reduxjs/toolkit';
import invoiceSlice from './invoiceSlice';
const store = configureStore({
    reducer:{
        invoice:invoiceSlice,
    },
});
export default store;