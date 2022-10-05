import React, {useEffect, useState} from "react";
import "./Homepage.css";
import {Link} from "react-router-dom"
import Skaterpic from "./Skaterpic";
 
function Homepage() {
const [skaters, setSkaters] = useState([])
const [active, setActive] = useState("")
const [isShown, setIsShown] = useState(true);

const handleClick = event => {
  // 👇️ toggle visibility
  setIsShown(current => !current);
};

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

 
    <div id="fighters-grid">
      
      {skaters.map((skater, i) => {
        return <Skaterpic skater={skater} key={skater.id} setActive={setActive}/>
        
       
      })}
     {/* <button onClick={() => setActive("firstCard")}>two</button>
    {active === "firstCard" && <Test data ={Data} cardIndex= {0}/> } */}
    </div>
    <img src={active.full_shot}className="card" style={{display: isShown ? 'block' : 'none'}}/>
    </>
  );
}

export default Homepage;
