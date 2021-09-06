import React, {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

class InvoiceForm extends React.Component {
  render() {
    return(
      <Card className="p-4 my-4">
        <div className="d-flex flex-row align-items-center justify-content-between mb-3">
          <div>
            <span className="fw-bold">Date:&nbsp;</span>{new Date().toLocaleDateString()}
          </div>
          <div className="d-flex flex-row align-items-center">
            <span className="fw-bold d-block me-2">Due Date:</span><Form.Control type="date" style={{maxWidth: '150px'}}/>
          </div>
        </div>
        <div className="w-100 text-left text-lg-center mt-5 mt-lg-0 mb-5">
          <h3 className="fw-bold">Invoice #<span className="text-primary">001</span></h3>
        </div>
        <hr className="my-4"/>
        <Row className="mb-5">
            <Col>
              <Form.Label className="fw-bold">Bill from:</Form.Label>
              <Form.Control placeholder="Email" type="email"/>
              <Form.Control placeholder="Address" type="text" className="mt-2"/>
              <Form.Control placeholder="Who is this invoice from?" as="textarea" rows={3} className="mt-2"/>
            </Col>
            <Col>
              <Form.Label className="fw-bold">Bill to:</Form.Label>
              <Form.Control placeholder="Email" type="email"/>
              <Form.Control placeholder="Address" type="text" className="mt-2"/>
              <Form.Control placeholder="Who is this invoice to?" as="textarea" rows={3} className="mt-2"/>
        </Col>
        </Row>
        <Table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>QTY</th>
              <th>RATE</th>
              <th>TOTAL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form.Control placeholder="Item name" type="text" className="mb-2"/>
                <Form.Control placeholder="Description" type="text"/>
              </td>
              <td style={{width: '70px'}}>
                <Form.Control placeholder="1" type="number" min="1" max="999"/>
              </td>
              <td style={{width: '70px'}}>
                <Form.Control placeholder="1" type="number" min="1" max="999"/>
              </td>
              <td style={{width: '70px'}}><span className="fw-bold">$0.00</span></td>
              <td style={{width: '70px'}}><span className="fw-bold">$0.00</span></td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col lg={6}>
            <Card.Link href="#" className="fw-bold">Add Item</Card.Link>
          </Col>
          <Col lg={6} >
            <div className="d-flex flex-row align-items-start justify-content-between">
              <span className="fw-bold">Subtotal: </span>
              <span>$0.00</span>
            </div>
            <div className="d-flex flex-row align-items-start justify-content-between mt-2">
              <span className="fw-bold">Discount: </span>
              <span>$0.00</span>
            </div>
            <hr/>
            <div className="d-flex flex-row align-items-start justify-content-between" style={{fontSize: '1.125rem'}}>
              <span className="fw-bold">Total: </span>
              <span className="fw-bold">$0.00</span>
            </div>
          </Col>
        </Row>
        <hr className="my-5"/>
        <Form.Label className="fw-bold">Notes:</Form.Label>
        <Form.Control placeholder="Thanks for your business!" as="textarea" rows={1}/>
      </Card>
    )
  }
}

export default InvoiceForm;
