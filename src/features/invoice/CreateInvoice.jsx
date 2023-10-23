import React from 'react'
import InvoiceForm from '../../components/InvoiceForm'
import { ErrorBoundary } from 'react-error-boundary'

const CreateInvoice = () => {
	const logError = (error, info) => {
			// Do something with the error, e.g. log to an external API
			console.error(error, info);
		};
	return (
		<ErrorBoundary fallback={<p>Something went wrong</p>}  onError={logError}>
		<InvoiceForm />
		</ErrorBoundary>
	)
}

export default CreateInvoice