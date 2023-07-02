import './row.css';

const Row = (props) => {
  const [name, salary] = props;
  return (
    <div className="row">
      <span className='name'>{name}</span>
      <span className='cost'>{salary}</span>
      <div className="icons">
        <i className="fa-solid fa-cookie"></i>
        <i className="fa-solid fa-trash"></i>
        <i className="fa-solid fa-star"></i>
      </div>

    </div>
  );
}

export default Row;