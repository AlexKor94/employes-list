import './addEmplee.css';

const AddEmplee = () => {
  return (
    <div className="add-form">
      <h2>Добавить нового сотрудника</h2>
      <form>
        <input className="form-control" type="text" placeholder='Как его зовут?' />
        <input className="form-control" type="text" placeholder='З/П в $?' />
        <button className="btn btn-outline-light">Добавить</button>
      </form>
    </div>

  );
}

export default AddEmplee;