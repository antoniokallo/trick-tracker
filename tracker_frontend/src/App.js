import './App.css';
import Homepage from './components/Homepage';
import {Routes, Route, Link} from "react-router-dom";
import React from 'react';
import Trickinfo from './components/Trickinfo';
import Skaterinfo from './components/Skaterinfo';


function App() {

  return (
    <div className="App">
         <nav id="nav">
    
    <div>
      <Link to='/Skaterinfo'>
      skaters
      </Link>
      </div>

    <div>
      <Link to="/">
      <img src="https://i.postimg.cc/ZY9T58HV/Screen-Shot-2022-09-30-at-2-52-05-PM.png" id="logo"/>
      </Link>
      </div>
   
    <div>
      <Link to="/Trickinfo">TRICKS</Link>
    </div>
    
  </nav>


 <Routes>
  <Route path='/' element={<Homepage/>} />
<Route path='Trickinfo' element={<Trickinfo/>} />
<Route path="Skaterinfo" element={<Skaterinfo/>} />
</Routes>
    </div>

  );
}

export default App;

