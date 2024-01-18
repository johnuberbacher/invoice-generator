import React from 'react'
import { useSelector } from 'react-redux';
import CardComponent from './CardComponent';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const invoices = useSelector((state)=>state.invoice.invoices);
    const navigate = useNavigate();
    const invoiceData ={
        isOpen: false,
        currency:  '$',
        currentDate: '',
        invoiceNumber: 1,
        dateOfIssue: '',
        billTo: '',
        billToEmail: '',
        billToAddress: '',
        billFrom: '',
        billFromEmail: '',
        billFromAddress: '',
        notes: '',
        total: '0.00',
        subTotal: '0.00',
        taxRate: '',
        taxAmmount: '0.00',
        discountRate: '',
        discountAmmount: '0.00',
        items:[
          {
            id: 0,
            name: '',
            description: '',
            price: '1.00',
            quantity: 1
          }
        ]
    }
    const handleClick = ()=>{
        navigate("/edit", { state: invoiceData });
    }
  return (
    <div className='flex flex-col w-full justify-center items-center overflow-y-auto'>
        <h1 className='text-blue-500 text-center mt-10'>List of Invoices</h1>
        <div className='flex flex-row flex-wrap gap-5 w-11/12 justify-around items-center overflow-y-auto '>
        {invoices.length===0?<span className='p-4 uppercase text-xl'>you donot have any created invoices yet</span>:""}
            {invoices.map((e)=>{
                return(
                    <>
                    <CardComponent invoiceData={e} key={e.invoiceNumber}></CardComponent>
                    </>
                )
            })}
        </div>
        
        <button onClick={handleClick} className='inline-block my-4 text-center h-10 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 active:bg-blue-800'>
          Create new Invoice
        </button>

    </div>
  )
}

export default Home
