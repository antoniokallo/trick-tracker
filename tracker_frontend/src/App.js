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
    


    <div className='active'>
      <Link to="/">
      <img src="https://i.postimg.cc/1zLr2dYr/Untitled-Artwork-4.png" id="logo"/>
      </Link>
      </div>
      <div>
      <Link to='/Skaterinfo'>
      skaters
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

