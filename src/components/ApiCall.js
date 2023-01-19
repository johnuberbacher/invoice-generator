import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Axios from "axios";

function UserData() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(
      response => setData(response.data)
    )
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Form.Label className="fw-bold">Users Data</Form.Label> <br />
      <table>
        <thead>
          <tr>
            <td >Name</td>
            <td>Website</td>
            <td>Email</td>
            <td>UserName</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.website}</td>
                <td>{data.email}</td>
                <td>{data.username}</td>
                <td>{data.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default UserData;