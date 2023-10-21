import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InvoiceItem from './InvoiceItem';
import InvoiceModal from './InvoiceModal';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addInvoice } from '../features/invoice/invoiceSlice';
import { nanoid } from '@reduxjs/toolkit';

const InvoiceForm = () => {
	const [invoiceState, setInvoiceState] = useState({
		currency: '$',
		currentDate: '',
		invoiceNumber: 1,
		dateOfIssue: '2023-10-19',
		billTo: 'karthik',
		billToEmail: 'karthik@gmail.com',
		billToAddress: 'address',
		billFrom: 'karthik',
		billFromEmail: 'karthik@gmail.com',
		billFromAddress: 'address',
		notes: '',
		total: '0.00',
		subTotal: '0.00',
		taxRate: '0.00',
		discountRate: '0.00',
		taxAmount: '0.00',
		discountAmount: '0.00'
	});
	const [ showModal, setShowModal ] = useState(false);
	const [ invoiceItems, setInvoiceItems ] = useState(()=> [
		{
			id: (+ new Date() + Math.floor(Math.random() * 999999)).toString(36),
			name: '',
			description: '',
			price: 1.00,
			quantity: 1
		}
	]);
	const dispatch = useDispatch()
	// custom hook
  useEffect(() => {
		handleCalculateTotal()
	}, [invoiceItems, invoiceState.discountRate, invoiceState.taxRate])

	const handleCalculateTotal = () => {
    let initial = 0.00;

    let subTotal = invoiceItems.reduce((accumulator, currentValue) => {
			return accumulator + (currentValue.price * currentValue.quantity)}, initial);
		subTotal = parseFloat(subTotal).toFixed(2);
    const taxAmount =  parseFloat((subTotal) * (invoiceState.taxRate / 100)).toFixed(2)
    const discountAmount = parseFloat(parseFloat(subTotal) * parseFloat(invoiceState.discountRate / 100)).toFixed(2);
    const total = parseFloat((parseFloat(subTotal) - parseFloat(discountAmount)) + parseFloat(taxAmount)).toFixed(2);

    setInvoiceState((previousState)=>({
			...previousState,
			subTotal: subTotal,
      taxAmount: taxAmount,
      discountAmount: discountAmount,
      total: total

    }));

  };
	
  const handleRowDel = (itemToDelete) =>{
		setInvoiceItems(current => current.filter(item => {return item.id !== itemToDelete.id}))
  };
  const handleAddEvent = (evt) => {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var item = {
      id: id,
      name: '',
      price: '1.00',
      description: '',
      quantity: '1'
    }
    setInvoiceItems([...invoiceItems, item]);
	}
  const onItemizedItemEdit = (evt) => {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var items = invoiceItems.slice();
    var newItems = items.map((items) => {
      for (var key in items) {
        if (key === item.name && items.id === item.id) {
          items[key] = item.value;
        }
      }
      return items;
    });
    setInvoiceItems(newItems);
  };
  const editField = (event) => {
		console.log([event.target.name])
    setInvoiceState((previousState) => ({...previousState,
      [event.target.name]: event.target.value
    }));
  };
  const onCurrencyChange = (selectedOption) => {
    setInvoiceItems(...invoiceItems, selectedOption);
  };

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(e.nativeEvent.submitter.value);
		if(e.nativeEvent.submitter.value === "review") {
			setShowModal(true)
		} else {
			dispatch(addInvoice({
				...invoiceState, items: invoiceItems
			}))
			console.log('redirect')
			redirect("/")
		} 
		
	}
  const closeModal = (event) => setShowModal(false);
	return (<Form onSubmit={handleFormSubmit}>
		<Row>
			<Col md={8} lg={9}>
				<Card className="p-4 p-xl-5 my-3 my-xl-4">
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item"><Link to="/">Home</Link></li>
						<li class="breadcrumb-item active" aria-current="page">Create</li>
					</ol>
				</nav>
					<div className="d-flex flex-row align-items-start justify-content-between mb-3">
						<div className="d-flex flex-column">
							<div className="d-flex flex-column">
								<div className="mb-2">
									<span className="fw-bold">Current&nbsp;Date:&nbsp;</span>
									<span className="current-date">{new Date().toLocaleDateString()}</span>
								</div>
							</div>
							<div className="d-flex flex-row align-items-center">
								<span className="fw-bold d-block me-2">Due&nbsp;Date:</span>
								<Form.Control type="date" value={invoiceState.dateOfIssue} name={"dateOfIssue"} onChange={editField} style={{
										maxWidth: '150px'
									}} required="required"/>
							</div>
						</div>
						<div className="d-flex flex-row align-items-center">
							<span className="fw-bold me-2">Invoice&nbsp;Number:&nbsp;</span>
							<Form.Control type="number" value={invoiceState.invoiceNumber} name={"invoiceNumber"} onChange={editField} min="1" style={{
									maxWidth: '70px'
								}} required="required"/>
						</div>
					</div>
					<hr className="my-4"/>
					<Row className="mb-5">
						<Col>
							<Form.Label className="fw-bold">Bill to:</Form.Label>
							<Form.Control placeholder={"Who is this invoice to?"} rows={3} value={invoiceState.billTo} type="text" name="billTo" className="my-2" onChange={editField} autoComplete="name" required="required"/>
							<Form.Control placeholder={"Email address"} value={invoiceState.billToEmail} type="email" name="billToEmail" className="my-2" onChange={editField} autoComplete="email" required="required"/>
							<Form.Control placeholder={"Billing address"} value={invoiceState.billToAddress} type="text" name="billToAddress" className="my-2" autoComplete="address" onChange={editField} required="required"/>
						</Col>
						<Col>
							<Form.Label className="fw-bold">Bill from:</Form.Label>
							<Form.Control placeholder={"Who is this invoice from?"} rows={3} value={invoiceState.billFrom} type="text" name="billFrom" className="my-2" onChange={editField} autoComplete="name" required="required"/>
							<Form.Control placeholder={"Email address"} value={invoiceState.billFromEmail} type="email" name="billFromEmail" className="my-2" onChange={editField} autoComplete="email" required="required"/>
							<Form.Control placeholder={"Billing address"} value={invoiceState.billFromAddress} type="text" name="billFromAddress" className="my-2" autoComplete="address" onChange={editField} required="required"/>
						</Col>
					</Row>
					<InvoiceItem onItemizedItemEdit={onItemizedItemEdit} onRowAdd={handleAddEvent} onRowDel={handleRowDel} currency={invoiceState.currency} items={invoiceItems}/>
					<Row className="mt-4 justify-content-end">
						<Col lg={6}>
							<div className="d-flex flex-row align-items-start justify-content-between">
								<span className="fw-bold">Subtotal:
								</span>
								<span>{invoiceState.currency}
									{invoiceState.subTotal}</span>
							</div>
							<div className="d-flex flex-row align-items-start justify-content-between mt-2">
								<span className="fw-bold">Discount:</span>
								<span>
									<span className="small ">({invoiceState.discountRate || 0}%)</span>
									{invoiceState.currency}
									{invoiceState.discountAmount || 0}</span>
							</div>
							<div className="d-flex flex-row align-items-start justify-content-between mt-2">
								<span className="fw-bold">Tax:
								</span>
								<span>
									<span className="small ">({invoiceState.taxRate || 0}%)</span>
									{invoiceState.currency}
									{invoiceState.taxAmount || 0}</span>
							</div>
							<hr/>
							<div className="d-flex flex-row align-items-start justify-content-between" style={{
									fontSize: '1.125rem'
								}}>
								<span className="fw-bold">Total:
								</span>
								<span className="fw-bold">{invoiceState.currency}
									{invoiceState.total || 0}</span>
							</div>
						</Col>
					</Row>
					<hr className="my-4"/>
					<Form.Label className="fw-bold">Notes:</Form.Label>
					<Form.Control placeholder="Thanks for your business!" name="notes" value={invoiceState.notes} onChange={editField} as="textarea" className="my-2" rows={1}/>
				</Card>
			</Col>
			<Col md={4} lg={3}>
				<div className="sticky-top pt-md-3 pt-xl-4">
					<Button variant="primary" type="submit" value="review" className="d-block w-100">Review Invoice</Button>
					<Button variant="secondary" type="submit" value="save" className="d-block w-100 mt-3">Save Invoice</Button>
					<InvoiceModal showModal={showModal} closeModal={closeModal} info={invoiceState} items={invoiceItems} currency={invoiceState.currency} subTotal={invoiceState.subTotal} taxAmount={invoiceState.taxAmount} discountAmount={invoiceState.discountAmount} total={invoiceState.total}/>
					<Form.Group className="mb-3">
						<Form.Label className="fw-bold">Currency:</Form.Label>
						<Form.Select onChange={event => onCurrencyChange({currency: event.target.value})} className="btn btn-light my-1" aria-label="Change Currency">
							<option value="$">USD (United States Dollar)</option>
							<option value="£">GBP (British Pound Sterling)</option>
							<option value="¥">JPY (Japanese Yen)</option>
							<option value="$">CAD (Canadian Dollar)</option>
							<option value="$">AUD (Australian Dollar)</option>
							<option value="$">SGD (Signapore Dollar)</option>
							<option value="¥">CNY (Chinese Renminbi)</option>
							<option value="₿">BTC (Bitcoin)</option>
						</Form.Select>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label className="fw-bold">Tax rate:</Form.Label>
						<InputGroup className="my-1 flex-nowrap">
							<Form.Control name="taxRate" type="number" value={invoiceState.taxRate} onChange={editField} className="bg-white border" placeholder="0.0" min="0.00" step="0.01" max="100.00"/>
							<InputGroup.Text className="bg-light fw-bold text-secondary small">
								%
							</InputGroup.Text>
						</InputGroup>
					</Form.Group>
					<Form.Group className="my-3">
						<Form.Label className="fw-bold">Discount rate:</Form.Label>
						<InputGroup className="my-1 flex-nowrap">
							<Form.Control name="discountRate" type="number" value={invoiceState.discountRate} onChange={editField} className="bg-white border" placeholder="0.0" min="0.00" step="0.01" max="100.00"/>
							<InputGroup.Text className="bg-light fw-bold text-secondary small">
								%
							</InputGroup.Text>
						</InputGroup>
					</Form.Group>
				</div>
			</Col>
		</Row>
	</Form>)
}

export default InvoiceForm;
