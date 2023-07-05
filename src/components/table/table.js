import './table.css';
import Row from '../row/row';
import { useState } from 'react';
import AddEmplee from '../form/addEmplee';

const Table = ({ data }) => {

  const [employees, setEmployee] = useState(data);

  const rows = employees.map((employee, i) => {
    return <Row {...employee} key={i} />
  });

  const setEmployees = (obj) => {
    setEmployee([...employees, obj]);
  }

  return (
    <>
      <div className="table">
        {rows}
      </div>
      <AddEmplee setEmployees={setEmployees} />
    </>
  );
}

export default Table;