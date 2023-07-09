import './header.css';

const Header = (props) => {

  return (
    <header>
      <h1>Залік співробітників компанії N</h1>
      <h2>Загальна кількість: {props.empCount}</h2>
      <h2>Премію отримають: {props.empCountIncrease}</h2>
    </header>
  );
}

export default Header;