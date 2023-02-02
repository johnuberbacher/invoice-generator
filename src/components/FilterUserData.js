import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserData() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [showUsers, setShowUsers] = useState(true);
  const [showFilteredUsers, setShowFilteredUsers] = useState(false);
  const [showSortedUserNames, setShowSortedUserNames] = useState(false);
  const [userNamesForSort, setuserNamesForSort] = useState([]);
  // const [showSortedUserWebsites, setShowSortedUserWebsites] = useState(false);
  // const [showSortedUsersEmail, setShowSortedUsersEmail] = useState(false);
  // const [showSortedUsersUN, setShowSortedUsersUN] = useState(false);
  // const [userwebsiteForSort, setserwebsiteForSort] = useState([]);
  // const [userEmailForSort, setuserEmailForSort] = useState([]);
  // const [UNForSort, setUNForSort] = useState([]);
  // const [showSortedUsersPhone, setShowSortedUsersPhone] = useState(false);
  // const [userDataForSort, setuserDataForSort] = useState([]);
  // const [filterUsers, setFilterUsers] = useState([]);
  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then(
      response => setData(response.data)
    )
  }, []);
  let searchLength = search.length;
  // function isNamePresentInUsers(data) {
  //   return data.name === search;
  // }
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
  // console.log(search);
  // console.log(data);

  // const keys = ['name', 'website', 'email', 'username', 'phone'];

  // let filterUsers = data.filter((array) =>
  //   keys.some((key) => isSubstringPresent(array[key].toLowerCase(), search.toLocaleLowerCase())))


  let filteredUsersArr = [];
  let filteredKeys = [];
  for (let k = 0; k < data.length; k++) {
    let keys = Object.keys(data[k]);
    console.log(keys);
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] === 'name' || keys[j] === 'website' || keys[j] === 'email' || keys[j] === 'username' || keys[j] === 'phone') {
        filteredKeys.push(keys[j]);
        // console.log(filteredKeys);
      }
    }
    for (let i = 0; i < filteredKeys.length; i++) {
      // console.log(data[k][filteredKeys[i]] + '  ' + search);
      let filteredUser = isSubstringPresent(data[k][filteredKeys[i]].toLowerCase(), search.toLocaleLowerCase())
      if (filteredUser) {
        filteredUsersArr.push(data[k]);
        break;

      }
    }
    // console.log(filteredUsersArr);
  }
  let usersDataForSort = [];
  for (let m = 0; m < data.length; m++) {
    usersDataForSort.push(data[m]);
  }
  console.log(usersDataForSort);

  let arrUserNameForSort = function (arr, stg) {
    let userName = usersDataForSort.sort((a, b) => {
      console.log('test print');
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    })
    setuserNamesForSort(userName);
  }
  console.log(userNamesForSort);

  let usersWebsitesForSort = [];
  for (let n = 0; n < data.length; n++) {
    usersWebsitesForSort.push(data[n]);
  }
  // console.log(usersWebsitesForSort);
  let sortedUserWebsites = function(arr,stg){
    let website = usersWebsitesForSort.sort((a, b) => {
    if (a.website.toLowerCase() < b.website.toLowerCase()) {
      return -1;
    } else {
      return 0;
    }
  })
  setuserNamesForSort(website);
} 
  console.log(userNamesForSort);

  let usersEmailForSort = [];
  for (let j = 0; j < data.length; j++) {
    usersEmailForSort.push(data[j]);
  }
  // console.log(usersEmailForSort);

  let sortedUserEmail = function(arr, stg) {
    let email = usersEmailForSort.sort((a, b) => {
      console.log('test print');
      if (a.email.toLowerCase() < b.email.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    })    
  setuserNamesForSort(email);
  }

  let usersUNForSort = [];
  for (let k = 0; k < data.length; k++) {
    usersUNForSort.push(data[k]);
  }
  // console.log(usersUNForSort);
  
  let sortedUserUN = function(arr,stg) {
    let userName = usersUNForSort.sort((a, b) => {
      console.log('test print');
      if (a.username.toLowerCase() < b.username.toLowerCase()) {
        return -1;
      } else {
        return 0;
      }
    })
    setuserNamesForSort(userName);
  }
  console.log(userNamesForSort);

  // let usersPhoneForSort = [];
  // for (let p = 0; p < data.length; p++) {
  //   usersPhoneForSort.push(data[p]);
  // }
  // console.log(usersPhoneForSort);
  // let sortedUserPhone = usersPhoneForSort.sort((a, b) => {
  //   console.log(a.phone);
  //   console.log(b.phone);
  //   console.log(a.phone - b.phone);
  //   return a.phone - b.phone;
  // })
  // console.log(sortedUserPhone);
  return (
    <div className="App">
      <Form.Label className="fw-bold">Users Data</Form.Label> <br />
      <h5>Search Data Here: </h5>
      <input type="text" value={search}
        onChange={(e) => setSearch(e.target.value)} onKeyUp={() => {
          if (searchLength === 0) {
            setShowFilteredUsers(false)
            setShowUsers(true)
          }
          if (searchLength > 0) {
            setShowFilteredUsers(true)
            setShowUsers(false)
            // setShowSortedUserWebsites(false)
            setShowSortedUserNames(false)
            // setShowSortedUsersUN(false)
            // setShowSortedUsersPhone(false)
            // setShowSortedUserWebsites(false)
            // setShowSortedUserNames(false)
          }
        }}></input> <br /><br />
      <Row>
        <Col>
          <button onClick={() => {
            arrUserNameForSort(usersDataForSort, 'name')
            console.log('sort button clicked');
            setShowSortedUserNames(true)
            setShowFilteredUsers(false)
            setShowUsers(false)
            // setShowSortedUserWebsites(false)
            // setShowSortedUsersUN(false)
            // setShowSortedUsersPhone(false)
            // setShowSortedUserWebsites(false)
          }}>Sort Tbl Names</button></Col>
        <Col>
          <button onClick={() => {
            sortedUserWebsites(usersDataForSort, 'website')
            setShowSortedUserNames(true)
            setShowFilteredUsers(false)
            setShowUsers(false)
            // setShowFilteredUsers(false)
            // setShowUsers(false)
            // setShowSortedUsersUN(false)
            // setShowSortedUsersPhone(false)
          }}>Sort Tbl website</button></Col>
        <Col><button onClick={() => {
            sortedUserEmail(usersDataForSort, 'email')
            setShowSortedUserNames(true)
            setShowFilteredUsers(false)
            setShowUsers(false)
          // setShowFilteredUsers(false)
          // setShowUsers(false)
          // setShowSortedUsersUN(false)
          // setShowSortedUsersPhone(false)
        }}>Sort User Email</button></Col>
        <Col><button onClick={() => {
            sortedUserUN(usersDataForSort, 'username')
            setShowSortedUserNames(true)
            setShowFilteredUsers(false)
            setShowUsers(false)
          // setShowSortedUserNames(false)
          // setShowFilteredUsers(false)
          // setShowUsers(false)
          // setShowSortedUsersPhone(false)
        }}>Sort User-Name</button></Col>
      </Row><br />
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
          {/* {data.filter(data => data.name.toLowerCase().includes(search.toLocaleLowerCase())).map((userData, index) => { */}
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
      }
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
          {filteredUsersArr.map((userfltData, index) => {
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
      {showSortedUserNames && <table className="table2">
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
          {userNamesForSort.map((userfltData, index) => {
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
      {/* {showSortedUserWebsites && <table className="table2">
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
          {sortedUserWebsites.map((userfltData, index) => {
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
      {showSortedUsersEmail && <table className="table2">
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
          {sortedUserEmail.map((userfltData, index) => {
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
      {showSortedUsersUN && <table className="table2">
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
          {sortedUserUN.map((userfltData, index) => {
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
      {showSortedUsersPhone && <table className="table2">
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
          {sortedUserPhone.map((userfltData, index) => {
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
      } */}
    </div>
  );
}
export default UserData;