import './row.css';

const Row = () => {
  return (
    <div className="row">
      <span className='name'>Alex K.</span>
      <span className='cost'>1000</span>
      <div className="icons">
        <i class="fa-solid fa-cookie"></i>
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-star"></i>
      </div>

    </div>
  );
}

export default Row;