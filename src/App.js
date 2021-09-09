import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import InvoiceModal from './components/InvoiceModal';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  state = {
    isOpen: false
  };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
callbackModal = () => {
   this.setState({ showModal: false });
}
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <Form>
          <Row>
            <Col md={8} xl={9}>
              <InvoiceForm/>
            </Col>
            <Col md={4} xl={3}>
              <div className="sticky-top pt-4">
                <Button variant="primary"  onClick={this.openModal} className="d-block w-100">Review Invoice</Button>
                <InvoiceModal showModal={this.state.isOpen}></InvoiceModal>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}}

export default App;
