import './App.css';
import Homepage from './components/Homepage';
import {Routes, Route, Link} from "react-router-dom";
import React, {useState} from 'react';


function App() {

const [active, setActive] = useState("")

  return (
    <div className="App">
 <Homepage /> 
    </div>
  );
}

export default App;

