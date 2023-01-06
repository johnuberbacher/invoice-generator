import React from "react";
import AddInvoice from "./components/AddInvoice";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function HideAndShow() {
    const [show, setShow] = React.useState(false);
    return (
        <div>
             <Button variant="primary" className="d-block w-100" onClick={() => {
                setShow(true)
            }}>AddInvoice</Button>
            {show && <div><AddInvoice /> </div>}
        </div>
    )
}
export default HideAndShow;