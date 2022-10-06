import React, {useEffect, useState} from "react";
import "./Homepage.css";
import {Link} from "react-router-dom"
import Skaterpic from "./Skaterpic";
import Trickdetails from "./Trickdetails";
 
function Homepage() {
const [skaters, setSkaters] = useState([])
const [active, setActive] = useState({})

// console.log(active)


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

function renderTrick () {
  if (active.add_tricks){
    return active.add_tricks.map((trick) => {
    return  (<h2 className="trickTitle"> <li>{trick.name} </li></h2>)
 })
}
}

let render = renderTrick()

useEffect(() => {
  render = renderTrick()
  console.log(render)
}, [active])

  return (
    <>

 
    <div id="skater-grid">
      
      {skaters.map((skater, i) => {
       
        return <Skaterpic skater={skater} key={skater.id} setActive={setActive}/>
        
    
      })}
      {/* {skaters.filter((skater,i) => {
        <p>{skater.add_tri</p>

      })}*/}

      

     {/* <button onClick={() => setActive("firstCard")}>two</button>
    {active === "firstCard" && <Test data ={Data} cardIndex= {0}/> } */}
    </div>
    <h1 className="Cardname"> {active.name}</h1>
  <img src={active.full_shot}className="card"/>
    <div className="sk8"> 
      {render}
   </div>
   <div className="YTvideo">
   <iframe
      width="853"
      height="480"
      // src={active.add_skater_tricks}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

   </div>
    </>
  );
}

export default Homepage;
