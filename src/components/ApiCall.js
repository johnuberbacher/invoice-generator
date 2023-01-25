import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Axios from "axios";

function UserData() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(true);
  const [showFilteredUsers, setShowFilteredUsers] = useState(false);
  // console.log(data);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(
      response => setData(response.data)
    )
  }, []);
  const length = search.length;
  function isSubstringPresent(a, b) {
    let matchedLength = 0;
    if (a !== undefined) {
      for (let i = 0; i <= a.length - b.length; i++) {
        for (let j = 0; j < b.length; j++) {
          if (a[i + j] === b[j]) {
            matchedLength = matchedLength + 1;
          }
          if (a[i + j] !== b[j]) {
            matchedLength = 0;
            break;
          }
          if (matchedLength === b.length) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function filterUsers() {
    let filteredData = [];
    let userText = search;
    console.log(userText);
    for (let i = 0; i < data.length; i++) {
      let subStringData = isSubstringPresent(data[i].name, userText);
      if (subStringData) {
        filteredData.push(data[i]);
      }
      setFilteredUsers(filteredData);
    }
  }

  console.log(filteredUsers);

  return (
    <div className="App">
      <Form.Label className="fw-bold">Users Data</Form.Label> <br />
      <h5>Search Data Here: </h5>
      <input type="text" value={search}
        onChange={(e) => setSearch(e.target.value)} onKeyUp={() => {
          filterUsers(setShowFilteredUsers(true), setShowUsers(false))
          if (length === 0) {
            setShowFilteredUsers(false)
            setShowUsers(true)
          }
        }
        }></input> <br /><br/>
      {/* <button onKeyUp={() => {filterUsers(setShowFilteredUsers(true), setShowUsers(false)) 
      if(search === 0) {
        setShowFilteredUsers(false)
      }}
      }>Search</button> */}
      {showUsers && <table className="table1">
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
          {data.map((userData, index) => {
            return (
              <tr key={index}>
                <td>{userData.name}</td>
                <td>{userData.website}</td>
                <td>{userData.email}</td>
                <td>{userData.username}</td>
                <td>{userData.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      }<br /> <br />
      {showFilteredUsers && <table className="table2">
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
          {filteredUsers.map((userfltData, index) => {
            return (
              <tr key={index}>
                <td>{userfltData.name}</td>
                <td>{userfltData.website}</td>
                <td>{userfltData.email}</td>
                <td>{userfltData.username}</td>
                <td>{userfltData.phone}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      }
    </div>
  );
}
export default UserData;