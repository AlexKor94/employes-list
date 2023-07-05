import React, { useState } from 'react';

import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import Table from '../table/table';
// import AddEmplee from '../form/addEmplee';
import './app.css';

function App() {

  const [data, setUsers] = useState([{
    id: 1,
    name: "Alex K.",
    salary: 3000,
    increase: false
  },
  {
    id: 2,
    name: "Fedir K.",
    salary: 2000,
    increase: true
  },
  {
    id: 3,
    name: "Petro K.",
    salary: 1000,
    increase: false
  }]);

  // const deleteItem = (id) => {
  //   setUser(users => {
  //     console.log(users);
  //     const index = users.findIndex(elem => elem.id === id);
  //     console.log(index);
  //     const before = users.slice(0, index);
  //     const after = users.slice(index + 1);
  //     const newArr = [...before, ...after];

  //     return newArr;

  //   })
  // }

  const deleteItem = (id) => {
    setUsers(data => data.filter(user => user.id !== id));
  }

  return (
    <div className="app">
      <Header />
      <div className="search-form">
        <Search />
        <Filter />
      </div>
      <Table
        data={data}
        deleteItem={deleteItem} />

    </div>
  );
}

export default App;