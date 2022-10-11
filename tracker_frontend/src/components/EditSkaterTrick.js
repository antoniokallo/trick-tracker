import React from 'react'
import {useState, useEffect} from 'react';

export default function EditSkaterTrick({active, videoID, trick, deleteSkaterTrick}) {

    const [videoBody, setVideoBody] = useState('')
    
    let skaterTrick = []

    useEffect (() => {
        skaterTrick = active.add_skater_tricks.filter((el, i) => {
            return el.trick_id === trick.id
        })
        // console.log(skaterTrick[0].id)
        // setVideoBody(skaterTrick[0].video_link)
        
            }, [trick, active] )

    function handleFormSubmit(e) {
        e.preventDefault();
        // console.log(skaterTrick[0].id)
      console.log(active.id)
      console.log(trick.id)
      console.log(videoID)
        fetch(`http://localhost:3000/skater_tricks/${videoID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // skater_id: active.id,
            // trick_id: trick.id,
            // id: videoID,
            video_link: videoBody
          }),
        })
          .then((r) => r.json())
          .then(console.log(active.skater_trick))

        //   .then((updatedVideo) => onUpdateFirstVideo(updatedVideo));
      }
      
      

  return (
    <div>
        <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="body"
        autoComplete="off"
        value={videoBody}
        onChange={(e) => setVideoBody(e.target.value)}
      />
      <input type="submit" value="Save" />
      {console.log(videoID)}
    </form>
    </div>
  )
}
