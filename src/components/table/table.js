import './table.css';
import Row from '../row/row';
import { useState } from 'react';


const Table = (props) => {
  const { data, deleteItem } = props;

  const rows = data.map((employee, i) => {
    const { id, ...itemprops } = employee;
    return <Row
      key={id}
      {...itemprops}
      deleteItem={() => deleteItem(id)} />
  });

  return (
    <>
      <div className="table">
        {rows}
      </div>
    </>
  );
}

export default Table;