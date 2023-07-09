import React, { useState } from 'react';

import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import Table from '../table/table';
import AddEmplee from '../form/addEmplee';
// import AddEmplee from '../form/addEmplee';
import './app.css';

function App() {
  const [users, setUsers] = useState({
    data: [{
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
    }],
    maxId: 3
  });

  const [term, setTerm] = useState('');

  const { data, maxId } = users;

  const deleteItem = (id) => {
    // setUsers(data => data.filter(user => user.id !== id));
    const tempData = data.filter(user => user.id !== id);

    setUsers({
      data: tempData,
      maxId: maxId + 1
    });

  }

  const addItem = (emplee) => {
    const tempData = [...data, {
      id: maxId + 1,
      ...emplee,
      increase: false
    }];
    setUsers({
      data: tempData,
      maxId: maxId + 1
    });
  }

  const onIncrease = (id, prop) => {
    const tempData = data.map(user => {
      if (user.id === id) {
        return { ...user, [prop]: !user[prop] }
      }
      return user;
    });

    setUsers({
      data: tempData,
      maxId: maxId + 1
    });
  }

  const searchEmp = (elements, term) => {
    if (term === '') {
      return elements;
    }
    return elements.filter(el => el.name.indexOf(term) > -1)
  }

  const onUpdateSearch = (term) => {
    setTerm(term);
  }

  const visibleData = searchEmp(data, term);

  return (

    <div className="app">
      <Header
        empCount={data.length}
        empCountIncrease={data.filter(str => str.increase == true).length} />
      <div className="search-form">
        <Search
          onUpdateSearch={onUpdateSearch}
        />
        <Filter />
      </div>
      <Table
        data={visibleData}
        deleteItem={deleteItem}
        onIncrease={onIncrease} />
      <AddEmplee addItem={addItem} />
    </div>
  );
}

export default App;