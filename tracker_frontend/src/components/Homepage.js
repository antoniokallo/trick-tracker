import React, {useEffect, useState} from "react";
import "./Homepage.css";
import {Link} from "react-router-dom"
import Skaterpic from "./Skaterpic";
import Trickdetails from "./Trickdetails";
 
function Homepage() {
  const [firstVideo, setFirstVideo] = useState('')
  const [clicked, setClicked] = useState([])
const [skaters, setSkaters] = useState([])
const [active, setActive] = useState({
  "id": "",
  "stance": "",
  "sponsor": null,
  "hometown": "",
  "profile": "",
  "add_skater_tricks": [
  {
  "id": '',
  "skater_id": '',
  "trick_id": '',
  "video_link": "",
  "created_at": "",
  "updated_at": ""
  },
  {
  "id": '',
  "skater_id": '',
  "trick_id": '',
  "video_link": "",
  }
  ],
  "add_tricks": [
  {
  "id": '',
  "name": "",
  "difficulty": "",
  },
  {
  "id": '',
  "name": "",
  "difficulty": "",
  }
  ]
  })

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

  // useEffect(() => {

  //   if(skaters.add_skater_tricks) {
  //     let video = skaters.add_skater_tricks.filter((el, i) => {
  //       return el.trick_id = trick.id
  //      })
  //      setFirstVideo(video)
  //   }
  // },[skaters.add_skater_tricks])
  function handleClick(trick) {

   let video = active.add_skater_tricks.filter((el, i) => {
    return el.trick_id == trick.id
   })
   console.log(video)

  setFirstVideo(video[0].video_link)
  }
  
function renderTrick () {
  if (active.add_tricks){
    return active.add_tricks.map((trick) => {
    return  ( <div className ><h2 onClick={() => handleClick(trick)} className="trickTitle"> {trick.name} </h2></div>)
 })
}
}

let render = renderTrick()

useEffect(() => {
  render = renderTrick()
  // console.log(render)
}, [active])


  return (
    <>

 
    <div id="skater-grid">
      
      {skaters.map((skater, i) => {
       
        return <Skaterpic skater={skater} key={skater.id} setFirstVideo={setFirstVideo} setActive={setActive}/>
        
    
      })}
      {/* {skaters.filter((skater,i) => {
        <p>{skater.add_tri</p>

      })}*/}

      

     {/* <button onClick={() => setActive("firstCard")}>two</button>
    {active === "firstCard" && <Test data ={Data} cardIndex= {0}/> } */}
    </div>
    <h1 className="Cardname"> {active.name}</h1>
    <div className="parent">
  
 
  <div className="YTvideo">
   <iframe
   height="100%"
   width= '100%'
   border = "100px"
      src={firstVideo}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
</div>
<img src={active.full_shot}className="card"/>
{active.id != "" ?
( <div className="sk8" > 
      {render}
   </div> ): null }


   </div>
 

    </>
  );
}

export default Homepage;
