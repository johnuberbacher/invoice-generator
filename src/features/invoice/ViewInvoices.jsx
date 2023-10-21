import React, { Suspense, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import { BiPlus, BiTrash } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useGetInvoicesQuery, useGetPokemonByNameQuery } from '../api/apiSlice';

const ViewInvoices = () => {
	const invoicesList = useSelector(state => state.invoice.invoice)
	const {
		data,
		error,
		isLoading,
		isError,
		isFetching,
		isSuccess,
	} = useGetPokemonByNameQuery()
	console.log(data)
	
	const tableHeaders = {
		'billTo': "BILL TO",
		'billFrom': "BILL FROM",
		'dateOfIssue': "DATE OF ISSUE",
		'total': "INVOICE TOTAL",
	}
	if (isError) return <div>An error has occurred!</div>

	return (
		<>
			<div className='pt-xl-4 d-flex justify-content-between'>
				<div>left</div>
				<button className="text-white btn btn-primary d-flex align-items-center" data-toggle="tooltip" title="Create new invoice">
					<BiPlus/>
					<div className='ml-2'>Invoice</div>
				</button>
			</div>
			<Table className='table-responsive table-hover'>
				<thead>
					<tr className=''>
						{Object.keys(tableHeaders).map((key, i) => (
							<th>{tableHeaders[key]}</th>
						))}
						<th>ACTIONS</th>
					</tr>
				</thead>
				<Suspense fallback={<div>loading</div>}>
				<tbody>
					{data && data.map((invoice) => (
						<tr className=''>
						 {Object.keys(tableHeaders).map((key, i) => (
							<td>{invoice[key]}</td>
						))}
						<td>
							<BiTrash style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white btn btn-danger"  data-toggle="tooltip" title="Delete" />
						</td>
						</tr>
					))}
				</tbody>
					</Suspense>
				

			</Table>
			<Link to={"create"}>create new</Link>
		</>
	)
}

export default ViewInvoices