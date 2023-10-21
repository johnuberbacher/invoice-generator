import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { BiTrash } from "react-icons/bi";
import EditableField from './EditableField';
import { ErrorBoundary } from 'react-error-boundary';

const InvoiceItem = ({onItemizedItemEdit, onRowAdd, currency, onRowDel, items}) => {
  
    var rowDel = onRowDel;
		const logError = (error, info) => {
			// Do something with the error, e.g. log to an external API
			console.error(error, info);
		};
  
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>QTY</th>
              <th>PRICE/RATE</th>
              <th className="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
					<ErrorBoundary fallback={<p>Something went wrong</p>}  onError={logError}>

            {items && items.map((item) => {
						return (
							
							<ItemRow onItemizedItemEdit={onItemizedItemEdit} item={item} onDelEvent={rowDel} key={item.id} currency={currency}/>
						)})}
					</ErrorBoundary>
          </tbody>
        </Table>
        <Button className="fw-bold" onClick={onRowAdd}>Add Item</Button>
      </div>
    );

  }
const ItemRow = (props) =>{
  const onDelEvent = () => {
    props.onDelEvent(props.item);
  }
    return (
      <tr>
        <td style={{width: '100%'}}>
          <EditableField
            onItemizedItemEdit={props.onItemizedItemEdit}
            cellData={{
            type: "text",
            name: "name",
            placeholder: "Item name",
            value: props.item.name,
            id: props.item.id,
          }}/>
          <EditableField
            onItemizedItemEdit={props.onItemizedItemEdit}
            cellData={{
            type: "text",
            name: "description",
            placeholder: "Item description",
            value: props.item.description,
            id: props.item.id
          }}/>
        </td>
        <td style={{minWidth: '70px'}}>
          <EditableField
          onItemizedItemEdit={props.onItemizedItemEdit}
          cellData={{
            type: "number",
            name: "quantity",
            min: 1,
            step: "1",
            value: props.item.quantity,
            id: props.item.id,
          }}/>
        </td>
        <td style={{minWidth: '130px'}}>
          <EditableField
            onItemizedItemEdit={props.onItemizedItemEdit}
            cellData={{
            leading: props.currency,
            type: "number",
            name: "price",
            min: 1,
            step: "0.01",
            presicion: 2,
            textAlign: "text-end",
            value: props.item.price,
            id: props.item.id,
          }}/>
        </td>
        <td className="text-center" style={{minWidth: '50px'}}>
          <BiTrash onClick={onDelEvent.bind(this)} style={{height: '33px', width: '33px', padding: '7.5px'}} className="text-white mt-1 btn btn-danger"/>
        </td>
      </tr>
    );

  }

export default InvoiceItem;
