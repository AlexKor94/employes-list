import './table.css';
import Row from '../row/row';
import { useState } from 'react';


const Table = (props) => {
  const { data, deleteItem } = props;

  // const [employees, setEmployee] = useState(data);

  const rows = data.map((employee, i) => {
    const { id, ...itemprops } = employee;
    return <Row
      key={id}
      {...itemprops}
      deleteItem={() => deleteItem(id)} />
  });

  // const setEmployees = (obj) => {
  //   console.log("Employees added");
  // }

  return (
    <>
      <div className="table">
        {rows}
      </div>
      {/* <AddEmplee setEmployees={setEmployees} /> */}
    </>
  );
}

export default Table;