import {useState} from "react"
import Footer from "./Footer"
import MainDetails from "./MainDetails"
import Notes from "./Notes"
import Table from "./Tables"
import Header from "./Header"
import Details from "./Details"
import ClientDetails from "./ClientDetails"
import Dates from "./Dates"

function App() {
    const [showInvoice, setShowInvoice] = useState(false)
    const [name, setName] = useState("")
    const [adderss, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [bankName, setBankName] = useState("")
    const [bankAccount, setBankAccount] = useState("")
    const [website, setWebsite] = useState("")
    const [clientName, setClientName] = useState("")
    const [clientAddress, setClientAddress] = useState("")
    const [invoiceNumber, setInvoiceNumber] = useState("")
    const [invoiceDate, setInvoiceDate] = useState("")
    const [dueDate, setDueDate] = useState("")
    const [notes, setNotes] = useState("")
    const handlePrint = () => {
        window.print()
    }
    return (
      <>
        <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
            {showInvoice ? <div>
                <Header handlePrint={handlePrint}/>
                <Details/>
                <ClientDetails/>
                <Dates/>

                <Table/>

                <Notes/>
                <Footer/>
                <button onClick={() => setShowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit Information</button>
            </div> : (
                <>
                    {/* name, address, email, phone, bank name, bank account number, website, client name, client adderss, invoice number, invoice date, due date, notes */}
                    <div className="flex flex-col justify-center">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" name="text" id="name" placeholder="Enter your name" autoComplete="off" value={name} />
                        <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
                    </div>
                </>
            )}
            
        </main>
      </>
    )
  }
