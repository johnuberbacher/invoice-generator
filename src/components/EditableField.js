import React, { Component, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class EditableField extends React.Component {
  render() {
    return (
      <InputGroup className="my-1">
        {this.props.cellData.leading != null &&
          <InputGroup.Text
            className="bg-light fw-bold border-0 text-secondary ps-3 pe-0"
            id="basic-addon1">
            {this.props.cellData.leading}
          </InputGroup.Text>
        }
        <Form.Control className={this.props.cellData.textAlign}
          type={this.props.cellData.type}
          placeholder={this.props.cellData.placeholder}
          min={this.props.cellData.min}
          name={this.props.cellData.name}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          step={this.props.cellData.step}
          presicion={this.props.cellData.presicion}
          aria-label={this.props.cellData.name}
          onChange={this.props.onItemizedItemEdit}
        />
      </InputGroup>
    );
  }
}

export default EditableField;
