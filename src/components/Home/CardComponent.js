import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteInvoice,addInvoice} from "../../Store/invoiceSlice";
import Modal from 'react-modal';
import InvoiceView from './InvoiceView';
import { ImCross } from "react-icons/im";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
    },
  };

const CardComponent = ({ invoiceData}) => {
    const {total,billTo,dateOfIssue,invoiceNumber} = invoiceData;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const invoices = useSelector((state)=>state.invoice.invoices);
    const navigate = useNavigate();
    function openModal() {
      setIsOpen(true);
    }

    function afterOpenModal() {
    }

    function closeModal() {
      setIsOpen(false);
    }
    const dispatch  = useDispatch();
    const onView = ()=>{
        setIsOpen(true);
    }
    const onDelete =()=>{
        dispatch(deleteInvoice(invoiceNumber));
    }
    const onEdit = ()=>{
      navigate("/edit", { state: invoiceData });
    }
    const getNextInvoiceNumber = () => {
        if (invoices.length > 0) {
          const lastInvoiceNumber = invoices[invoices.length - 1].invoiceNumber;
          return lastInvoiceNumber + 1;
        } else {
          return 1;
        }
    };

    const getCurrentDate = () => {
     // Get the current date in the desired format
      return new Date().toLocaleDateString();
    };

    const onCopy = () => {
        // Create a copy of the existing invoice data
        const copiedInvoiceData = {
            isOpen: false,
            currency: invoiceData.currency,
            currentDate: getCurrentDate(),
            invoiceNumber: getNextInvoiceNumber(),
            dateOfIssue: invoiceData.dateOfIssue,
            billTo: invoiceData.billTo,
            billToEmail: invoiceData.billToEmail,
            billToAddress: invoiceData.billToAddress,
            billFrom: invoiceData.billFrom,
            billFromEmail: invoiceData.billFromEmail,
            billFromAddress: invoiceData.billFromAddress,
            notes: invoiceData.notes,
            total: invoiceData.total,
            subTotal: invoiceData.subTotal,
            taxRate: invoiceData.taxRate,
            taxAmmount: invoiceData.taxAmmount,
            discountRate: invoiceData.discountRate,
            discountAmmount: invoiceData.discountAmmount,
            items:invoiceData.items
        };
      
        // Dispatch an action to add the copied invoice to your state with updated invoice number
        dispatch(addInvoice(copiedInvoiceData));
      };
      
    return (
      <div className="w-3/12 mx-auto bg-white rounded-md overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4 flex flex-col justify-center items-center">
          <div className="font-bold text-xl mb-2">Invoice</div>
          <p className="text-gray-700 text-base">
            Invoice Number: {invoiceNumber}
          </p>
          <p className="text-gray-700 text-base">
            Total Amount: {total}
          </p>
          <p className="text-gray-700 text-base">
            Bill To: {billTo}
          </p>
          <p className="text-gray-700 text-base">
            Due Date: {dateOfIssue}
          </p>
        </div>
        <div className="px-6 py-4 flex justify-center items-center">
          <button
            onClick={onEdit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Edit
          </button>
          <button
            onClick={onView}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            View
          </button>
          <button
            onClick={onCopy}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Copy
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="flex flex-col w-full">
              <div className="flex justify-end pb-5">
                <button onClick={closeModal} className="text-red-600">
                  <ImCross />
                </button>
              </div>

              <InvoiceView invoice={invoiceData}></InvoiceView>
            </div>
          </Modal>
        </div>
      </div>
    );
  };

export default CardComponent
