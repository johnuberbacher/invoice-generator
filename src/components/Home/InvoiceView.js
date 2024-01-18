import React from 'react';

const InvoiceView = ({ invoice }) => {
  return (
    <div className="w-full mx-auto bg-white p-10  shadow-md rounded-md">
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Invoice #{invoice.invoiceNumber}</h1>
          <p className="text-gray-500">Due Date: {invoice.dateOfIssue}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold">Bill To</h2>
        <p>{invoice.billTo}</p>
        <p className="text-gray-500">{invoice.billToEmail}</p>
        <p className="text-gray-500">{invoice.billToAddress}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold">Bill From</h2>
        <p>{invoice.billFrom}</p>
        <p className="text-gray-500">{invoice.billFromEmail}</p>
        <p className="text-gray-500">{invoice.billFromAddress}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-bold">Items</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border py-2">Name</th>
              <th className="border py-2">Description</th>
              <th className="border py-2">Price</th>
              <th className="border py-2">Quantity</th>
              <th className="border py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.id}>
                <td className="border py-2">{item.name}</td>
                <td className="border py-2">{item.description}</td>
                <td className="border py-2">{item.price}</td>
                <td className="border py-2">{item.quantity}</td>
                <td className="border py-2">{(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <div className="w-1/3">
          <div className="mb-2 flex justify-between">
            <span>Subtotal:</span>
            <span>${invoice.subTotal}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Tax ({invoice.taxRate}%):</span>
            <span>${invoice.taxAmmount}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Discount ({invoice.discountRate}%):</span>
            <span>${invoice.discountAmmount}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Total:</span>
            <span>${invoice.total}</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-bold">Notes</h2>
        <p>{invoice.notes}</p>
      </div>
    </div>
  );
};

export default InvoiceView;
