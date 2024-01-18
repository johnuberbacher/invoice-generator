import React from 'react'
import InvoiceForm from '../InvoiceForm';
import { useLocation } from "react-router-dom";
const EditInvoice = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <div>
      <InvoiceForm invoiceData= {data}></InvoiceForm>
    </div>
  )
}

export default EditInvoice
