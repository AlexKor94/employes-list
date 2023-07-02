import './row.css';

const Row = () => {
  return (
    <div className="row">
      <span className='name'>Alex K.</span>
      <span className='cost'>1000</span>
      <div className="icons">
        <i className="fa-solid fa-cookie"></i>
        <i className="fa-solid fa-trash"></i>
        <i className="fa-solid fa-star"></i>
      </div>

    </div>
  );
}

export default Row;