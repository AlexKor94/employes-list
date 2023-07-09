import './header.css';

const Header = (props) => {

  return (
    <header>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число: {props.empCount}</h2>
      <h2>Премию получат:</h2>
    </header>
  );
}

export default Header;