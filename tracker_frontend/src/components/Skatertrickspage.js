import React, {useState,useEffect}from 'react'
import './Skaterinfo.css'

export default function Skatertrickspage() {



        const [formData, setFormData] = useState({
      name: "",
      trick: "",
      video_link: "",
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
      const createSkatertrick = async() => {
        let req = await fetch("http://localhost:3000/skaters", {
          method: "POST",
          headers:{
            "Content-Type":"applications/json" 
          },
          body: JSON.stringify(formData)
        })
        let res = await req.json()
        createSkatertrick(res)
      }
      
      return (

    <div className='ah'>
    <form onSubmit={handleSubmit}>
      <label>
    <input onChange={formChange}type="text" placeholder="enter name" name="name"/>
    </label>
    <label>
    <input onChange={formChange} type="text" placeholder="enter trick" name="trick"/>
    </label>
    <label>
    <input onChange={formChange} type="text" placeholder="enter video link" name="video_link"/>
    </label>
    <button>submit</button>
    </form>
    </div>
  )
}
