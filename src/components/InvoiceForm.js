import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { BiTrash } from "react-icons/bi";
import InvoiceItem from './InvoiceItem';

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.items = [
      {
        name: '',
        description: '',
        quantity: 1,
        price: '0.00',
      }
    ];
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  addItem(event) {
    event.preventDefault();
    var itemArray = this.state.items;
    var newItemInput = {
      name: '',
      description: '',
      quantity: 1,
      price: '0.00',
    };
    itemArray.push(newItemInput);
    this.setState({ items: itemArray });
  }
  removeItem(itemIndex) {
    var itemArray = this.state.items.splice(itemIndex, 1);
    this.setState( {items: itemArray });
  }
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
        <div className="w-100 text-left text-lg-center mt-5 mt-lg-0 mb-5 d-none">
          <h3 className="fw-bold">Invoice #<span className="text-primary">001</span></h3>
        </div>
        <hr className="my-4"/>
        <Row className="mb-5">
          <Col>
            <Form.Label className="fw-bold">Bill from:</Form.Label>
            <Form.Control placeholder="Email" type="email"/>
            <Form.Control placeholder="Billing address" type="text" className="mt-2"/>
            <Form.Control placeholder="Who is this invoice from?" as="textarea" rows={3} className="mt-2"/>
          </Col>
          <Col>
            <Form.Label className="fw-bold">Bill to:</Form.Label>
            <Form.Control placeholder="Email" type="email"/>
            <Form.Control placeholder="Billing address" type="text" className="mt-2"/>
            <Form.Control placeholder="Who is this invoice to?" as="textarea" rows={3} className="mt-2"/>
          </Col>
        </Row>
        <InvoiceItem items={this.state.items} removeItem={this.removeItem.bind(this)} />
        <Row>
          <Col lg={6}>
            <Button className="fw-bold" onClick={this.addItem}>Add Item</Button>
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
