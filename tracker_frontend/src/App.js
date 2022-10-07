import './App.css';
import Homepage from './components/Homepage';
import {Routes, Route, Link} from "react-router-dom";
import React from 'react';
import "./components/Homepage.css"
import Trickinfo from './components/Trickinfo';
import Skaterinfo from './components/Skaterinfo';
import Skatertrickspage from './components/Skatertrickspage';
import Aboutinfo from './components/Aboutinfo';


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
      <img src='https://i.postimg.cc/bJcrfqqv/Untitled-Artwork-5.png' />
      </Link>
      </div>
    <div>
      <Link to="/Trickinfo">
        <img src='https://i.postimg.cc/TYqrkHqm/Untitled-Artwork-6.png' />
      </Link>
    </div>
    <div>
      <Link to="/Aboutinfo">
        <img src='https://i.postimg.cc/PxNsN6Y9/Untitled-Artwork-7.png' />
      </Link>
    </div>
    <div>
      <Link to="/Skatertrickspage">
        yuh
      </Link>
    </div>
  </nav>


 <Routes>
 <Route path='Aboutinfo' element={<Aboutinfo/>}/>
 <Route path="Skatertrickspage" element={<Skatertrickspage/>}/>
<Route path='/' element={<Homepage/>} />
<Route path='Trickinfo' element={<Trickinfo/>} />
<Route path="Skaterinfo" element={<Skaterinfo/>} />
</Routes>
    </div>

  );
}

export default App;

