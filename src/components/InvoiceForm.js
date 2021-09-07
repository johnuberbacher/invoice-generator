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

class InvoiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  // Add items
  addItem(event) {
    event.preventDefault();
    var itemArray = this.state.items;
    // grab input text value
    //var newItemInput = this.refs.newItem.value;
    var newItemInput = 'test';
    // add new text value to item array
    itemArray.push(newItemInput);
    this.setState({ items: itemArray });
    // this.refs.newItem.value = "";
  }
  // Remove Items
  removeItem(name, i) {
    var items = this.state.items.slice();
    // remove item at index
    items.splice(i, 1);
    //update item array
    this.setState({
      items
    });
  }
  render() {
    return(
      <Card className="p-4 my-4">
      <Form onSubmit={this.addItem}>
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
        <InvoiceItem items={this.state.items} removeItem={this.removeItem} />
        <Row>
          <Col lg={6}>
            <Button className="fw-bold" type="submit">Add Item</Button>
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
        </Form>
      </Card>
    )
  }
}
class InvoiceItem extends InvoiceForm {
  constructor(props) {
    super(props);
    this.state = {
      value: 1.00,
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(e) {
		this.setState({value:e.target.value})
  }
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QTY</th>
            <th>PRICE</th>
            <th className="text-end">TOTAL</th>
            <th className="text-center">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {this.props.items.map((item, i) => {
            return (
              <tr id={i} key={i}>
                <td>
                  <Form.Control placeholder="Item name" type="text" className="mb-2"/>
                  <Form.Control placeholder="Description" type="text"/>
                </td>
                <td style={{width: '70px'}}>{i.uuid}{i}
                  <Form.Control placeholder="1"  type="number" min="1" max="999"/>
                </td>
                <td style={{width: '100px'}}>
                  <Form.Control placeholder="1.00" type="number" step="0.01" min="1.00" max="999" name={this.state.value} value={this.state.value} onChange={this.handleInputChange.bind(this)}/>
                </td>
                <td className="text-end" style={{width: '100px'}}>
                  <div className="fw-bold pt-2">${this.state.itemPrice * 2}</div>
                </td>
                <td className="text-center" style={{width: '100px'}}>
                  <BiTrash style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white btn btn-danger"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    )
  }
}

export default InvoiceForm;
