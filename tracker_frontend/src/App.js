import './App.css';
import Homepage from './components/Homepage';
import {Routes, Route, Link} from "react-router-dom";
import Test from "./components/Test"
import "./components/style.css"
import React, {useState} from 'react';
import Data from './components/Data';

function App() {

const [active, setActive] = useState("")

  return (
    <div className="App">
      <nav>
        <button onClick={() => setActive("firstCard")}>one</button>
        <button onClick={() => setActive("SecondCard")}>two</button>
        <button onClick={() => setActive("ThirdCard")}>three</button>
      </nav>
      <div>
        {active === "firstCard" && <Test data ={Data} cardIndex= {0}/> }
        {active === "SecondCard" && <Test data = {Data} cardIndex={1} /> }
        {active === "ThirdCard" && <Test data = {Data} cardIndex={2} /> }
     
       
      </div>



    </div>
  );
}

export default App;

