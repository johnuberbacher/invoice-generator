import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import ViewInvoices from './features/invoice/ViewInvoices';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CreateInvoice from './features/invoice/CreateInvoice';
import EditInvoice from './features/invoice/EditInvoice';
import ViewInvoice from './features/invoice/ViewInvoice';

const App = () => {

	const router = createBrowserRouter([
		{
			path: '/',
			children:[
				{
					path: '/',
          element: <ViewInvoices />,
				},
				{
					path: 'create',
          element: <CreateInvoice />,
				},
				{
					path: 'edit/:id',
          element: <EditInvoice />,
				},
				{
          path: ':id',
          element: <ViewInvoice />,
        }
			]
		}
	])
	return (
		<div className="App d-flex flex-column w-100">
			<Container>
				<RouterProvider router={router} />
			</Container>
		</div>
	)
}

export default App;
