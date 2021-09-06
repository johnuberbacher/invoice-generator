import React, {  useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

function GenerateInvoice() {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
    });
    const imgProps= pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('invoice-001.pdf');
  });
}

class InvoiceModal extends React.Component {
  state = {
    isOpen: false
  };
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    return(
      <div>
        <Button variant="primary" className="d-block w-100" onClick={this.openModal}>Review Invoice</Button>
        <Modal show={this.state.isOpen} onHide={this.closeModal} size="lg" centered>
          <div  id="invoiceCapture">
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
              <div>
                <h5 className="fw-bold my-2">Name</h5>
                <h6 className="fw-bold my-2 text-secondary">Invoice #001</h6>
              </div>
              <h6 className="fw-bold my-2">Amount Due: $0.00</h6>
            </div>
            <div className="p-4">
              <Row className="mb-4">
                <Col xs={6}>
                  <div className="fw-bold mb-1">Bill to:</div>
                  <div>FirstName LastName</div>
                  <div>123 Awesome Street, Coolsville CO, 80203, US</div>
                  <div>email@address.com</div>
                </Col>
                <Col xs={6}>
                  <div className="fw-bold mb-1">Invoice:</div>
                  <div>2021-001</div>
                  <div>email@address.com</div>
                </Col>
              </Row>
              <Table>
                <thead>
                  <tr>
                    <th>QTY</th>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{width: '70px'}}>
                      1
                    </td>
                    <td>
                      Item name - description
                    </td>
                    <td style={{width: '100px'}}>$0.00</td>
                    <td style={{width: '100px'}}>$0.00</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div class="pb-4 px-4">
            <Button variant="primary" className="d-block w-100" onClick={GenerateInvoice}>Send Invoice</Button>
          </div>
        </Modal>
      </div>
    )
  }
}

export default InvoiceModal;
