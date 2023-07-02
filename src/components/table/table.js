import './table.css';
import Row from '../row/row';
import { useState } from 'react';

const Table = () => {

  const data = [{
    name: "Alex K.",
    salary: 1000
  },
  {
    name: "Alex K.",
    salary: 1000
  },
  {
    name: "Alex K.",
    salary: 1000
  }];

  const [employees, setEmployee] = useState(data);

  const rows = employees.map((employee, i) => {
    <Row name={employee.name} salary={employee.salary} key={i} />
  });

  return (
    <div className="table">
      {rows}
    </div>
  );
}

export default Table;