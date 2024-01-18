import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InvoiceForm from './components/InvoiceForm';
import Home from './components/Home/Home';
import {Routes,Route} from "react-router-dom";
import {Provider } from "react-redux";
import store from './Store/store';
import EditInvoice from './components/Home/EditInvoice';
const App = ()=>{
  return (
    <Provider store={store}>
      <div className="App d-flex flex-column align-items-center justify-content-center w-100">
        <Routes>
        <Route path="/" element={
              <Home/>
        }/>
        <Route path="/create" element={
              <InvoiceForm/>
        }/>
        <Route path="/edit" element={
              <EditInvoice/>
        }/>
        </Routes>
      </div>
    </Provider>
    
  );
}
export default App;
