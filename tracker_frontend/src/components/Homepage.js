import React, {useEffect, useState} from "react";
import "./Homepage.css";
import {Link} from "react-router-dom"
import Skaterpic from "./Skaterpic";
 
function Homepage() {
const [skaters, setSkaters] = useState([])
const [active, setActive] = useState("")

useEffect (() => {
  const fetcher = () => {
    fetch("http://localhost:3000/skaters")
    .then (res => res.json()) 
    .then (data => 
      {setSkaters(data)
      }
    )}
    fetcher()
  }, [] )

  // Recreate the Fighters grid using this function
  

  return (
    <>

    <nav id="nav">
    
      <div>skaters</div>

      <div><img src="https://i.postimg.cc/ZY9T58HV/Screen-Shot-2022-09-30-at-2-52-05-PM.png" id="logo"/></div>
      <div>Tricks</div>
      
    </nav>
    <div id="fighters-grid">
      
      {skaters.map((skater, i) => {
        return <Skaterpic skater={skater} key={skater.id} setActive={setActive}/>
        
       
      })}
     {/* <button onClick={() => setActive("firstCard")}>two</button>
    {active === "firstCard" && <Test data ={Data} cardIndex= {0}/> } */}
    </div>
    <img src={active.full_shot}className="card" />
    </>
  );
}

export default Homepage;
