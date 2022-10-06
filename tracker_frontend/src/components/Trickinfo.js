import { Link } from "react-router-dom"
import React, {useState, useEffect} from 'react'
import './Trickinfo.css'
import Trickdetails from "./Trickdetails"





export default function Trickinfo() {
    const [tricks, setTricks] = useState([])
    const [active, setActive] = useState([])

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

        // for(let i=0; i < active.add_tricks.length; i++){

      

        // let name = active.add_tricks.i.name
        // let link = active.add_skater_tricks.i.name
        // return <Trickinfo 

        // }

return (
<div className="tricks">
  <h1 className="text">difficulty</h1>
<h2 className="difficulty">{active.difficulty}</h2>
    {tricks.map((trick, i) => {
        return  <Trickdetails trick={trick} key={trick.id} setActive={setActive}/>
     
        // console.log(trick)
       
      })}
 <div className="flame thing">
  <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/345cffd3-10e8-4d79-a514-734a9f77ce8d/d9y5gdr-97ee3d62-9ada-4935-b6f8-df92878502df.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM0NWNmZmQzLTEwZTgtNGQ3OS1hNTE0LTczNGE5Zjc3Y2U4ZFwvZDl5NWdkci05N2VlM2Q2Mi05YWRhLTQ5MzUtYjZmOC1kZjkyODc4NTAyZGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JwTKaUFSwYOxoj4_LQqPdbMLJnDzf70sREaBjbZzCm0" />
 </div>
    </div>
  
)
    }
