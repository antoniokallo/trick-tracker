import { Link } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import './Trickinfo.css'
import Trickdetails from "./Trickdetails"





export default function Trickinfo() {
    const [tricks, setTricks] = useState([])
    const [active, setActive] = useState("")

    useEffect (() => {
        const fetcher = () => {
          fetch("http://localhost:3000/tricks")
          .then (res => res.json()) 
          .then (data => 
            {setTricks(data)
            }
          )}
          fetcher()
        }, [] )


return (
<div className="tricks">
  <h1 className="text">difficulty</h1>
<h2 className="difficulty">{active.difficulty}</h2>
    {tricks.map((trick, i) => {
        return  <Trickdetails trick={trick} key={trick.id} setActive={setActive}/>
     
        // console.log(trick)
       
      })}
 
    </div>
  
)
    }
