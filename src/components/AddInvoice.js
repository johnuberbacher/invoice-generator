// const [invoice, setInvoices] = React.useState([{billfrom:'manasa', billto: 'abhilash'},{billFrom: 'santosh', billTo:'sandeep'}])
//add a new button with lable "Add Invoice" below "Review Invoice" button.
//when the user clicks on the "Add Invoice" button, a new table with columns "billFrom" and "billTo" should be displayed below Notes section.

import React from "react";

function AddInvoice() {
    const [Invoices, setInvoices] = React.useState([{billFrom:'manasa',billTo:'Abhilash' }, {billFrom:'santosh',billTo:'sandeep'}])
    const invoicesFrom = Invoices.map((Invoices) => <li key={0}>{Invoices.billFrom}</li>)
    const invoocesTo = Invoices.map((Invoices) => <li key={0}>{Invoices.billTo}</li>)
    
    return (
        <div>
            <h2>Invoices Data</h2>
            <td>Bill From</td>{invoicesFrom}
            <td>Bill To</td>{invoocesTo}
        </div>
    )
}

export default AddInvoice;