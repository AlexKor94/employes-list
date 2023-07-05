import './addEmplee.css';

const AddEmplee = (props) => {

  const addEmp = (e) => {
    e.preventDefault();
    props.setEmployees(
      {
        name: e.target.name.value,
        salary: e.target.salary.value
      });
  }

  return (
    <div className="add-form">
      <h2>Добавить нового сотрудника</h2>
      <form onSubmit={addEmp}>
        <input name="name" className="form-control" type="text" placeholder='Как его зовут?' />
        <input name="salary" className="form-control" type="text" placeholder='З/П в $?' />
        <button className="btn btn-outline-light">Добавить</button>
      </form>
    </div>

  );
}

export default AddEmplee;