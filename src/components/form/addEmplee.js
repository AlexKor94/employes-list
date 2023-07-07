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
    addItem(employee);
  }

  return (
    <div className="add-form">
      <h2>Добавить нового сотрудника</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          className="form-control"
          type="text"
          placeholder='Как его зовут?'
          value={employee.name}
          onChange={handleChange}
        />
        <input
          name="salary"
          className="form-control"
          type="text"
          placeholder='З/П в $?'
          value={employee.salary}
          onChange={handleChange} />
        <button className="btn btn-outline-light">Добавить</button>
      </form>
    </div>

  );
}

export default AddEmplee;