import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { BiTrash } from "react-icons/bi";
import EditableField from './EditableField';

class InvoiceItem extends React.Component {
  constructor(props) {
    super(props);
  }
  removeItem(itemIndex) {
    this.props.removeItem(itemIndex)
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
              <tr key={i} id={'tr-' + i}>
                <td key={'td-' + i}>
                  <EditableField placeholder="testing" key={item.name} value={item.name||''} type="text"/>
                  <EditableField placeholder="testing" key={item.description} value={item.description || ''} type="text"/>
                </td>
                <td style={{width: '70px'}}>
                  <EditableField key={item.quantity} value={item.quantity} min="1" max="999" type="number"/>
                </td>
                <td style={{width: '100px'}}>
                  <EditableField key={item.price} value={item.price} type="number" step="0.01" min="1.00" max="999"/>
                </td>
                <td className="text-end" style={{width: '75px'}}>
                  <div className="fw-bold pt-2">${item.price * item.quantity}</div>
                </td>
                <td className="text-center" style={{width: '100px'}}>
                  <BiTrash onClick={this.removeItem.bind(this)} style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white btn btn-danger"/>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    )
  }
}

export default InvoiceItem;
