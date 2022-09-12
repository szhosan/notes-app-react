import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addItem, removeItem, editItem, toggleArchived} from "./redux/todosReducer";

function App() {
  const items = useSelector((state)=>state);
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log(items);
    dispatch(toggleArchived("l28wmwom"));
  },[items, dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
