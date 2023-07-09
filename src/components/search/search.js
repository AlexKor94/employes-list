import { useState } from 'react';
import './search.css';
const Search = (props) => {
  const [term, onUpdateTerm] = useState('');
  const onUpdateSearch = (val) => {
    onUpdateTerm(val);
    props.onUpdateSearch(val);
  }
  return (
    <>
      <input
        className="form-control"
        type="text"
        placeholder="Знайдіть співробітника за ім'ям"
        aria-label="default input example"
        value={term}
        onChange={e => onUpdateSearch(e.target.value)}
      />
    </>

  );
}

export default Search;