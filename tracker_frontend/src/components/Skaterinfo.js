import React, {useEffect, useState} from "react";
import Skaterdetails from "./Skaterdetails";
import './Skaterinfo.css'

import "./Skaterinfo.css"

export default function Skaterinfo() {


  const [formData, setFormData] = useState({
name: "",
Image: "",
profile: "",
  })
  const formChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
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

const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(formData)
}
const createSkater = async() => {
  let req = await fetch("http://localhost:3000/skaters", {
    method: "POST",
    headers:{
      "Content-Type":"applications/json" 
    },
    body: JSON.stringify(formData)
  })
  let res = await req.json()
  createSkater(res)
}

  

return(
 

<div className="ah">

{skaters.map((skater, i) => {
       
        return  <Skaterdetails skater={skater} key={skater.id} />      
            
     
      })}
  
      </div>
      );
    }
