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
    <div className="App my-5">
      <Container>
        <Row>
          <Col md={8} xl={9}>
            <div className="bg-white shadow p-4 rounded mb-4">
              <div class="d-flex flex-row align-items-center justify-content-between mb-4">
                <div>
                  <span class="fw-bold">Date:&nbsp;&nbsp;</span>01/01/2021
                </div>
                <div>
                  <span class="fw-bold">Due date:&nbsp;&nbsp;</span>01/01/2021
                </div>
              </div>
              <hr className="my-5"/>
              <Form className="mb-5">
                <Row>
                  <Col>
                    <Form.Label className="fw-bold">Bill from</Form.Label>
                    <Form.Control placeholder="Email" type="email"/>
                    <Form.Control placeholder="Who is this invoice from?" as="textarea" rows={3} className="mt-3"/>
                  </Col>
                  <Col>
                    <Form.Label className="fw-bold">Bill to</Form.Label>
                    <Form.Control placeholder="Email" type="email"/>
                    <Form.Control placeholder="Who is this invoice to?" as="textarea" rows={3} className="mt-3"/>
                  </Col>
                </Row>
              </Form>
              <Table >
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>
                      <Form.Control placeholder="Item name" type="text" className="mt-2"/>
                      <Form.Control placeholder="Description" as="textarea" rows={3} className="mt-2"/>
                    </td>
                    <td><Form.Control placeholder="Item name" type="text" className="mt-2"/></td>
                    <td>Test</td>
                    <td>Test</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <Col md={4} xl={3}>
            <Button variant="primary" className="d-block w-100 shadow">Submit Invoice</Button>
            <Row>
              <Col lg={6} className="mt-3">
                <Button variant="light"className="d-block w-100 bg-white shadow">Preview</Button>
              </Col>
              <Col lg={6} className="mt-3">
                <Button variant="light"className="d-block w-100 bg-white shadow">Offline Download</Button>
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
