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
import InvoiceModal from './InvoiceModal';
import EditableField from './EditableField';

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentDate: '',
      dateOfIssue: '',
      billTo: '',
      billToEmail: '',
      billToAddress: '',
      billFrom: 'John Uberbacher',
      billFromEmail: 'johnuberbacher@gmail.com',
      billFromAddress: '123 Awesome Street, Denver CO',
      notes: '',
    };
    this.state.items = [
      {
        name: 'tester',
        description: '',
        quantity: 1,
        price: '0.00',
      }
    ];
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }
  addItem(event) {
    event.preventDefault();
    var itemArray = this.state.items;
    var newItemInput = {
      name: "t",
      description: "",
      quantity: 1,
      price: '0.25',
    };
    itemArray.push(newItemInput);
    this.setState({ items: itemArray });
    console.log(this.state.items)
  }
  editItem(event) {
     this.setState({ [event.target.name]: event.target.value });
  }
  removeItem(itemIndex) {
    var itemArray = this.state.items.splice(itemIndex, 1);
    this.setState( {items: itemArray });
  }
  openModal = (event) => {
    event.preventDefault()
    this.setState({ isOpen: true });
    console.log(this.state)
  };
  closeModal = (event) => this.setState({ isOpen: false });
  render() {
    return(
      <Form onSubmit={this.openModal}>
        <Row>
          <Col md={8} xl={9}>
            <Card className="p-4 my-4">
              <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                <div>
                  <span className="fw-bold">Date:&nbsp;</span>
                  <span className="current-date">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold d-block me-2">Due Date:</span>
                  <Form.Control type="date" value={this.state.dateOfIssue} name={"dateOfIssue"} onChange={(event)=>this.editItem(event)} style={{maxWidth: '150px'}} required/>
                </div>
              </div>
              <div className="w-100 text-left text-lg-center mt-5 mt-lg-0 mb-5 d-none">
                <h3 className="fw-bold">Invoice #<span className="text-primary">001</span></h3>
              </div>
              <hr className="my-4"/>
              <Row className="mb-5">
                <Col>
                  <Form.Label className="fw-bold">Bill to:</Form.Label>
                  <Form.Control placeholder={"Email"} value={this.state.billToEmail} type="text" name="billToEmail" className="my-2" onChange={(event)=>this.editItem(event)} required/>
                  <Form.Control placeholder={"Billing address"} value={this.state.billToAddress} type="text" name="billToAddress" className="my-2" onChange={(event)=>this.editItem(event)} required/>
                  <Form.Control placeholder={"Who is this invoice to?"} rows={3} value={this.state.billTo} type="text" name="billTo" as="textarea" className="my-2" onChange={(event)=>this.editItem(event)} required/>
                </Col>
                  <Col>
                    <Form.Label className="fw-bold">Bill from:</Form.Label>
                    <Form.Control placeholder={"Email"} value={this.state.billFromEmail} type="text" name="billFromEmail" className="my-2" onChange={(event)=>this.editItem(event)} required/>
                    <Form.Control placeholder={"Billing address"} value={this.state.billFromAddress} type="text" name="billFromAddress" className="my-2" onChange={(event)=>this.editItem(event)} required/>
                    <Form.Control placeholder={"Who is this invoice from?"} rows={3} value={this.state.billFrom} type="text" name="billFrom" as="textarea" className="my-2" onChange={(event)=>this.editItem(event)} required/>
                  </Col>
              </Row>
              <InvoiceItem items={this.state.items} removeItem={this.removeItem.bind(this)} onChange={this.editItem.bind(this)}/>
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
          </Col>
          <Col md={4} xl={3}>
            <div className="sticky-top pt-md-4">
              <Button variant="primary" type="submit" className="d-block w-100">Review Invoice</Button>
              <InvoiceModal showModal={this.state.isOpen} closeModal={this.closeModal} info={this.state} items={this.state.items}></InvoiceModal>
            </div>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default InvoiceForm;
