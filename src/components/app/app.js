import Header from '../header/header';
import Filter from '../filter/filter';
import Search from '../search/search';
import Table from '../table/table';
// import AddEmplee from '../form/addEmplee';
import './app.css';

function App() {

  const data = [{
    name: "Alex K.",
    salary: 3000,
    increase: false
  },
  {
    name: "Fedir K.",
    salary: 2000,
    increase: true
  },
  {
    name: "Petro K.",
    salary: 1000,
    increase: false
  }];


  return (
    <div className="app">
      <Header />
      <div className="search-form">
        <Search />
        <Filter />
      </div>
      <Table data={data} />

    </div>
  );
}

export default App;