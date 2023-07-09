import React, { useState } from 'react';

import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import Table from '../table/table';
import AddEmplee from '../form/addEmplee';
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

  const deleteItem = (id) => {
    setUsers(data => data.filter(user => user.id !== id));
  }

  const addItem = (emplee) => {
    const tempData = [...data, {
      id: data.length + 1,
      ...emplee,
      increase: false
    }];
    setUsers(tempData);
  }

  return (
    <div className="app">
      <Header empCount={data.length} />
      <div className="search-form">
        <Search />
        <Filter />
      </div>
      <Table
        data={data}
        deleteItem={deleteItem} />
      <AddEmplee addItem={addItem} />
    </div>
  );
}

export default App;