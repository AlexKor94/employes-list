import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import Table from '../table/table';
import AddEmplee from '../form/addEmplee';
import './app.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="search-form">
        <Search />
        <Filter />
      </div>
      <Table />
      <AddEmplee />
    </div>
  );
}

export default App;