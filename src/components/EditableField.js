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

class EditableField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      type: props.type,
      value: props.value,
      name: props.name,
      description: props.description,
      editClassName: props.editClassName,
      placeholder: props.placeholder,
      edit: false
    }
  }
  render() {
    return (
      this.state.edit===true&&
      <Form.Control
        type={this.state.type}
        name={this.state.name}
        value={this.state.value}
        placeholder={this.state.placeholder}
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
        placeholder={this.state.placeholder}
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

export default EditableField;
