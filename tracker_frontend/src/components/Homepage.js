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

 
    <div id="skater-grid">
      
      {skaters.map((skater, i) => {
        return <Skaterpic skater={skater} key={skater.id} setActive={setActive}/>
        
       
      })}
     {/* <button onClick={() => setActive("firstCard")}>two</button>
    {active === "firstCard" && <Test data ={Data} cardIndex= {0}/> } */}
    </div>
    <h1 className="Cardname"> {active.name}</h1>
    <img src={active.full_shot}className="card"/>
    </>
  );
}

export default Homepage;
