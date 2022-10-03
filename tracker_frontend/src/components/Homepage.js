import React from "react";
import "./Homepage.css";
import {Link} from "react-router-dom"
 
function homepage() {

  let fighters = ["bryan", "anna", 'feng', 'steve', 'hwoarang', 'jin', 'lars', 'paul', 'eddy', 'heihachi', 'kazuya', 'yoshimitsu']

  // Recreate the Fighters grid using this function
  
  const fighterUrl = (name) => {
    return 
  }


  return (
    <>
    <nav id="nav">
    
      <div>skaters</div>

      <div><img src="https://i.postimg.cc/ZY9T58HV/Screen-Shot-2022-09-30-at-2-52-05-PM.png" id="logo"/></div>
      <div>Tricks</div>
      
    </nav>
    <h1 id="bg-title"></h1>
    <div id="fighters-grid">
      
      {fighters.map((el, i) => {
        return <div className="fighter-thumb"><img style={{height: '100px', width: '100px'}} src={fighterUrl(el)}  />
        
        
        </div>
      })}

    </div>
    </>
  );
}

export default homepage;
