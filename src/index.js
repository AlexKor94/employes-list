import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
const val = `Hello world`;
const Elem = () => {
  return (
    <>
      <h1>Hi!</h1>
      <p>{val}</p>
      <input type="text" placeholder='some text' />
      <button>button</button>
    </>
  );
}
root.render(
  <Elem />
);