// const [invoice, setInvoices] = React.useState([{billfrom:'manasa', billto: 'abhilash'},{billFrom: 'santosh', billTo:'sandeep'}])
//add a new button with lable "Add Invoice" below "Review Invoice" button.
//when the user clicks on the "Add Invoice" button, a new table with columns "billFrom" and "billTo" should be displayed below Notes section.

//1. change invoices data text style 
//2. don't repeat billFrom and billTo 
//3. add space after add in "Add Invoice" button text. 

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AddInvoice(props) {
    // const [Invoices, setInvoices] = React.useState([{billFrom:'manasa' }, {billFrom:'santosh'}])
    const invoicesFrom = <li key={0}>{props.childBillFrom}</li>
    const invoocesTo =  <li key={0}>{props.childBillTo}</li>
    
    return (
        <div>
        <Form.Label className="fw-bold">Invoices Data</Form.Label> <br/>
            <Row>
                <Col><td>Bill From</td>{invoicesFrom}</Col>
                <Col><td>Bill To</td>{invoocesTo}</Col>
            </Row>
            
        </div>
    )
}

export default AddInvoice;