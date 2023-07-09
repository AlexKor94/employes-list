import './table.css';
import Row from '../row/row';
import { useState } from 'react';


const Table = (props) => {
  const { data, deleteItem, onIncrease } = props;

  const rows = data.map((employee, i) => {
    const { id, ...itemprops } = employee;
    return <Row
      key={id}
      {...itemprops}
      deleteItem={() => deleteItem(id)}
      onIncrease={(e) => onIncrease(id, e.currentTarget.getAttribute('data-toggle'))}
    />
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