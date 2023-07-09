import './filter.css';

const Filter = (props) => {

  const dataFilter = [
    { name: "all", label: "Всі співробітники" },
    { name: "promote", label: "На підвищення" },
    { name: "moreThousand", label: "З/П більше 1000$" }
  ];

  const buttons = dataFilter.map(button => {
    const active = props.filter === button.name ? 'btn-light' : 'btn-outline-light';
    return <button
      key={button.name}
      name={button.name}
      type="button"
      className={`btn ${active}`}
      onClick={() => props.onUpdateFilter(button.name)}
    >{button.label}</button>
  });

  return (


    < div className="filters-btn" >
      {buttons}
      {/* <button type="button" className="btn btn-light">Все сотрудники</button>
      <button type="button" className="btn btn-outline-light">На повышение</button>
      <button type="button" className="btn btn-outline-light">З/П больше 1000$</button> */}
    </div>

  );
}

export default Filter;