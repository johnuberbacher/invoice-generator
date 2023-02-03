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
  // const [showFilteredUsers, setShowFilteredUsers] = useState(false);
  const [showSortedUserNames, setShowSortedUserNames] = useState(false);
  const [usersForFilterAndSort, setUsersForFilterAndSort] = useState([]);
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
  function filterUsers() {
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
        let filteredUser = isSubstringPresent(data[k][filteredKeys[i]].toLowerCase(), search.toLowerCase())
        if (filteredUser) {
          filteredUsersArr.push(data[k]);
          break;
        }
      }
      console.log(filteredUsersArr);
      setUsersForFilterAndSort(filteredUsersArr);
    }
  }


  let usersDataForSort = [];
  for (let m = 0; m < data.length; m++) {
    usersDataForSort.push(data[m]);
  }
  console.log(usersDataForSort);

  let sortUsersAc = function (data, key) {
    let usersDataAfterSort = [];
    console.log('test print');
    if (key === 'name') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else if (key === 'website') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.website.toLowerCase() < b.website.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else if (key === 'email') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.email.toLowerCase() < b.email.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else if (key === 'username') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.username.toLowerCase() < b.username.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else {
      return 0;
    }
    console.log(usersDataAfterSort);
    setUsersForFilterAndSort(usersDataAfterSort);
  }
  console.log(usersForFilterAndSort);

  let sortUsersDc = function (data, key) {
    let usersDataAfterSort = [];
    console.log('test print');
    if (key === 'name') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else if (key === 'website') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.website.toLowerCase() > b.website.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else if (key === 'email') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.email.toLowerCase() > b.email.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else if (key === 'username') {
      usersDataAfterSort = data.sort((a, b) => {
        if (a.username.toLowerCase() > b.username.toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      })
    }
    else {
      return 0;
    }
    console.log(usersDataAfterSort);
    setUsersForFilterAndSort(usersDataAfterSort);
  }
  //   let arrUserNameForSort = function () {
  //     let userName = usersDataForSort.sort((a, b) => {
  //       console.log('test print');
  //       if (a.name.toLowerCase() < b.name.toLowerCase()) {
  //         return -1;
  //       } else {
  //         return 0;
  //       }
  //     })
  //     setUsersForFilterAndSort(userName);
  //   }
  //   console.log(usersForFilterAndSort);

  //   let usersWebsitesForSort = [];
  //   for (let n = 0; n < data.length; n++) {
  //     usersWebsitesForSort.push(data[n]);
  //   }
  //   // console.log(usersWebsitesForSort);
  //   let sortedUserWebsites = function(){
  //     let website = usersWebsitesForSort.sort((a, b) => {
  //     if (a.website.toLowerCase() < b.website.toLowerCase()) {
  //       return -1;
  //     } else {
  //       return 0;
  //     }
  //   })
  //   setUsersForFilterAndSort(website);
  // } 
  //   console.log(usersForFilterAndSort);

  //   let usersEmailForSort = [];
  //   for (let j = 0; j < data.length; j++) {
  //     usersEmailForSort.push(data[j]);
  //   }
  //   // console.log(usersEmailForSort);

  //   let sortedUserEmail = function() {
  //     let email = usersEmailForSort.sort((a, b) => {
  //       console.log('test print');
  //       if (a.email.toLowerCase() < b.email.toLowerCase()) {
  //         return -1;
  //       } else {
  //         return 0;
  //       }
  //     })    
  //     setUsersForFilterAndSort(email);
  //   }

  //   let usersUNForSort = [];
  //   for (let k = 0; k < data.length; k++) {
  //     usersUNForSort.push(data[k]);
  //   }
  //   // console.log(usersUNForSort);

  //   let sortedUserUN = function() {
  //     let userName = usersUNForSort.sort((a, b) => {
  //       console.log('test print');
  //       if (a.username.toLowerCase() < b.username.toLowerCase()) {
  //         return -1;
  //       } else {
  //         return 0;
  //       }
  //     })
  //     setUsersForFilterAndSort(userName);
  //   }
  //   console.log(usersForFilterAndSort);

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
          filterUsers(setShowSortedUserNames(true), setShowUsers(false))
          if (searchLength === 0) {
            // setShowFilteredUsers(false)
            setShowUsers(true)
            setShowSortedUserNames(false)
          }
          if (searchLength > 0) {
            setShowUsers(false)
            setShowSortedUserNames(true)
          }
        }}></input> <br /><br />
      <Row>
        <Col>
          <button onClick={() => {
            sortUsersAc(usersDataForSort, 'name')
            console.log('sort button clicked');
            setShowSortedUserNames(true)
            setShowUsers(false)
          }}>Sort by Names Ac</button></Col>
        <Col>
          <button onClick={() => {
            sortUsersAc(usersDataForSort, 'website')
            setShowSortedUserNames(true)
            setShowUsers(false)
          }}>Sort By website Ac</button></Col>
        <Col><button onClick={() => {
          sortUsersAc(usersDataForSort, 'email')
          setShowSortedUserNames(true)
          setShowUsers(false)
        }}>Sort By Email Ac</button></Col>
        <Col><button onClick={() => {
          sortUsersAc(usersDataForSort, 'username')
          setShowSortedUserNames(true)
          setShowUsers(false)
        }}>Sort By User-Name</button></Col>
      </Row><br />
      <Row>
        <Col>
          <button onClick={() => {
            sortUsersDc(usersDataForSort, 'name')
            console.log('sort button clicked');
            setShowSortedUserNames(true)
            setShowUsers(false)
          }}>Sort by Names Dc</button></Col>
        <Col>
          <button onClick={() => {
            sortUsersDc(usersDataForSort, 'website')
            setShowSortedUserNames(true)
            setShowUsers(false)
          }}>Sort by website Dc</button></Col>
        <Col><button onClick={() => {
          sortUsersDc(usersDataForSort, 'email')
          setShowSortedUserNames(true)
          setShowUsers(false)
        }}>Sort By Email Dc</button></Col>
        <Col><button onClick={() => {
          sortUsersDc(usersDataForSort, 'username')
          setShowSortedUserNames(true)
          setShowUsers(false)
        }}>Sort By User-Name</button></Col>
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
      {/* {showFilteredUsers && <table className="table2">
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
      } */}
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
          {usersForFilterAndSort.map((userfltData, index) => {
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

// change table heading style bold & Italic