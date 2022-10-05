import { Link } from "react-router-dom"
import React, {useState, useEffect} from 'react'





export default function Trickinfo() {

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

    const [tricks, setTricks] = useState("")

    {tricks.map((trick, i) => {
        return <p> {trick.name}</p>
        
       
      })}
    <div>
    </div>
  
}
