import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './App.css';

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center w-100">
      <Container className="my-4 my-lg-5">
        <Row>
          <Col md={8} xl={9}>
            <div className="bg-white shadow p-4 rounded mb-4 mb-md-0">
              <div className="d-flex flex-row align-items-center justify-content-between mb-3">
                <div>
                  <span className="fw-bold">Date:&nbsp;</span>01/01/2021
                </div>
                <div>
                  <span className="fw-bold">Due date:&nbsp;</span>01/01/2021
                </div>
              </div>
              <div className="w-100 text-left text-lg-center mt-5 mt-lg-4 mb-5">
                <h3 className="fw-bold">Invoice #<span className="text-primary">001</span></h3>
              </div>
              <hr className="my-4"/>
              <Form className="mb-5">
                <Row>
                  <Col>
                    <Form.Label className="fw-bold">Bill from</Form.Label>
                    <Form.Control placeholder="Email" type="email"/>
                    <Form.Control placeholder="Address" type="text" className="mt-2"/>
                    <Form.Control placeholder="Who is this invoice from?" as="textarea" rows={3} className="mt-2"/>
                  </Col>
                  <Col>
                    <Form.Label className="fw-bold">Bill to</Form.Label>
                    <Form.Control placeholder="Email" type="email"/>
                    <Form.Control placeholder="Address" type="text" className="mt-2"/>
                    <Form.Control placeholder="Who is this invoice to?" as="textarea" rows={3} className="mt-2"/>
                  </Col>
                </Row>
              </Form>
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
                  <Button variant="light"className="d-block w-100 bg-white">Add Item</Button>
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
              <Form.Label className="fw-bold">Notes</Form.Label>
              <Form.Control placeholder="Thanks for your business!" as="textarea" rows={1}/>
            </div>
          </Col>
          <Col md={4} xl={3}>
            <Button variant="primary" className="d-block w-100 ">Submit Invoice</Button>
            <Row>
              <Col lg={6} className="mt-3">
                <Button variant="light" className="d-block w-100 bg-white">Preview</Button>
              </Col>
              <Col lg={6} className="mt-3">
                <Button variant="light" className="d-block w-100 bg-white">Offline Copy</Button>
              </Col>
            </Row>
            <hr className="mt-4"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
