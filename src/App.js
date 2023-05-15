function App() {
    const handlePrint = () => {
        window.print()
    }
    return (
      <>
        <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
            {/* Start of Header */}
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                <div>
                <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h1>
                </div>
                <div>
                <ul className="flex items-center justify-between flex-wrap">
                    <li><button onClick={handlePrint} className="btn btn-print">Print</button></li>
                    <li><button className="btn btn-download">Download</button></li>
                    <li><button className="btn btn-send">Send</button></li>
                </ul>
                </div>
            </header>
            {/* End of Header */}
            {/* Start of Your details */}
            <section className="flex flex-col items-center justify-end">
                <h2 className="text-xl uppercase">Your Name</h2>
                <p>Your Address</p>
            </section>
            {/* End of Your details */}
            {/* Start of Client's details */}
            <section className="mt5">
                <h2 className="text-xl uppercase">Client's Name</h2>
                <p>Client's Address</p>
            </section>
            {/* End of Client's details */}
            {/* Start of Dates */}
            <article className="my-5 flex items-end justify-end">
                <ul>
                    <li><span className="font-bold">Incoicer number: </span></li>
                    <li><span className="font-bold">Invoice Date: </span></li>
                    <li><span className="font-bold">Due Date: </span></li>
                </ul>
            </article>
            {/*End of Dates*/}

            {/* Start of Table */}
            <div className="my-5">
                This is a  table
            </div>
            {/* End of Table */}

            {/* Start of Notes */}
            <section className="mb-5">
                {/* Textarea */}
                <p>Notes to the client...</p>
            </section>
            {/* End of Notes */}

            {/* Start of Footer */}
            <footer>
                <ul className="flex flex-wrap items-center justify-center">
                    <li><span className="font-blod">Your Name:</span> Indu Sree</li>
                    <li><span className="font-blod">Your Email:</span> info@gmail.com</li>
                    <li><span className="font-blod">Phone number:</span> 9154867699</li>
                    <li><span className="font-blod">Bank:</span> Bank Account</li>
                    <li><span className="font-blod">Account holder:</span> Indu Sree</li>
                    <li><span className="font-blod">Account number:</span> 123 456 789</li>
                    <li><span className="font-blod">Website:</span> https://info.com</li>
                </ul>
            </footer>
            {/* End of Footer */}
        </main>
      </>
    )
  }
