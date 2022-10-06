import React, {useEffect, useState} from "react";
import Skaterdetails from "./Skaterdetails";
import './Skaterinfo.css'

import "./Skaterinfo.css"





export default function Skaterinfo() {

  const [skaters, setSkaters] = useState([])

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

return(

<div className="skaterdetails">
{skaters.map((skater, i) => {
       
        return  <Skaterdetails skater={skater} key={skater.id} />      
            
     
      })}
      
      </div>
      );
    }
