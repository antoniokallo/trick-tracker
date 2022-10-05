import './App.css';
import Homepage from './components/Homepage';
import {Routes, Route, Link} from "react-router-dom";
import React from 'react';
import Trickinfo from './components/Trickinfo';


function App() {

  return (
    <div className="App">
         <nav id="nav">
    
    <div>skaters</div>

    <div><img src="https://i.postimg.cc/ZY9T58HV/Screen-Shot-2022-09-30-at-2-52-05-PM.png" id="logo"/></div>
    <div>Tricks</div>
    
  </nav>

 <Homepage /> 

 <Routes>
<Route path='Trickinfo' element={<Trickinfo/>} />
</Routes>
    </div>

  );
}

export default App;

