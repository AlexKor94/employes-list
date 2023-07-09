import React, { useState } from 'react';
import './addEmplee.css';

const AddEmplee = (props) => {
  const { addItem } = props;

  const [employee, setEmployee] = useState(
    {
      name: '',
      salary: ''
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployee({
      name: '',
      salary: ''
    })
    addItem(employee);
  }

  const active = !(employee.name.length > 3 && employee.salary > 99);
  const checkName = employee.name.length < 3 ? { color: "red" } : { color: "green" };
  const checkSalary = employee.salary < 99 ? { color: "red" } : { color: "green" };
  return (
    <div className="add-form">
      <h2>Додати нового співробітника</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control"
          type="text"
          placeholder='Как его зовут?'
          value={employee.name}
          onChange={handleChange}
          style={checkName}
        />
        <input
          name="salary"
          className="form-control"
          type="text"
          placeholder='З/П в $?'
          value={employee.salary}
          onChange={handleChange}
          style={checkSalary}
        />
        <button className="btn btn-outline-light" disabled={active}>Додати</button>
      </form>
    </div>

  );
}

export default AddEmplee;