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
    this.state = {};
    this.state.items = [
      {
        name: '',
        description: '',
        quantity: 1,
        price: '0.00',
      }
    ];
    this.handleAddEvent = this.handleAddEvent.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  addItem(event) {
    event.preventDefault();
    var itemArray = this.state.items;
    // grab input text value
    //var newItemInput = this.refs.newItem.value;
    var newItemInput = {
      name: '',
      description: '',
      quantity: 1,
      price: '0.00',
    };
    // add new text value to item array
    itemArray.push(newItemInput);
    this.setState({ items: itemArray });
    // this.refs.newItem.value = "";
  }
  handleAddEvent(event) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var item = {
      name: '',
      description: '',
      quantity: 1,
      price: '4.99',
    }
    this.state.items.push(item);
    this.setState(this.state.items);
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
        <InvoiceItem items={this.state.items} removeItem={this.removeItem} />
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
class InvoiceItem extends InvoiceForm {
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
              <tr  key={i} id={'row-' + i}>
                <td>
                  <EditableField key={i.name} value={item.name} type="text"/>
                  <EditableField key={i.description} value={item.description} type="text"/>
                </td>
                <td style={{width: '70px'}}>
                  <EditableField key={i.quantity} value={item.quantity} min="1" max="999" type="number"/>
                </td>
                <td style={{width: '100px'}}>
                  <EditableField key={i.price} value={item.price} type="number" step="0.01" min="1.00" max="999"/>
                </td>
                <td className="text-end" style={{width: '75px'}}>
                  <div className="fw-bold pt-2">${item.price * item.quantity}</div>
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

class EditableField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: props.id,
      type: props.type,
      value: props.value,
      description: props.description,
      editClassName: props.editClassName,
      edit: false
    }
  }
  render() {
    return (
      this.state.edit===true&&
      <Form.Control
        name={this.state.value}
        type={this.state.type}
        value={this.state.value}
        className="my-1"
        onFocus={event=>{
          const value = event.target.value
          event.target.value = ''
          event.target.value = value
          this.setState({backup:this.state.value})
        }}
        onChange={event=>{
          this.setState({value:event.target.value})
        }}
        onBlur={event=>{
          this.setState({value:event.target.value})
          this.setState({edit:false})
        }}
        onKeyUp={event=>{
          if(event.key==='Escape') {
            this.setState({edit:false, value:this.state.backup})
          }
          if(event.key==='Enter') {
            this.setState({edit:false})
          }
        }}
      />
      ||
      <Form.Control
        name={this.state.value}
        type={this.state.type}
        value={this.state.value}
        className="my-1"
        onChange={event=>{
          this.setState({value:event.target.value})
        }}
        onClick={event=>{
          this.setState({edit:this.state.edit!==true})
        }}
      />
    )
  }
}

export default InvoiceForm;
