import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Container from 'react-bootstrap/Container';
import InvoiceForm from './InvoiceForm';
import ListPage from './listPage';

function DisplayDataAfterButtonClick() {
    const [button1, setButton1] = React.useState(false);
    const [button2, setButton2] = React.useState(false);
    return (
        <div className="App d-flex flex-column align-items-center justify-content-center w-100">
            <button onClick={() => {
                setButton1(true)
                setButton2(false)
            }}>New Invoice</button>
            <button onClick={() => {
                setButton2(true)
                setButton1(false)
            }}>Previous Invoice</button>
            {button1 && <div><InvoiceForm /></div>}
            {button2 && <div><ListPage /></div>}
            {/* <Container>
                <InvoiceForm />
            </Container> */}
        </div>
    );
}

export default DisplayDataAfterButtonClick;
// const [invoices, setInvoices] = React.useState([{billfrom:'manasa', billto: 'abhilash'},{billFrom: 'santosh', billTo:'sandeep'}])
//add a new button with lable "Add Invoice" below "Review Invoice" button.
//when the user clicks on the "Add Invoice" button, a new table with columns "billFrom" and "billTo" should be displayed below Notes section.