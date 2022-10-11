import React from 'react'
import EditSkaterTrick from './EditSkaterTrick'
import {useState, useEffect} from 'react'

export default function SkaterTrickInfo({trick, videoID, active, handleClick}) {

const [isEditing, setIsEditing] = useState(false);


function deleteSkaterTrick() {
  fetch(`http://localhost:3000/skater_tricks/${videoID}`,{
    method: 'DELETE'
  }).then(res=>res.json())
    // handleSavedDelete(video)
    // reRender((render=>!render))) 
  .catch(err => console.log(err))
}

  return ( 
    <div>
    {isEditing
        ?(<EditSkaterTrick active={active} videoID={videoID}trick={trick} deleteSkaterTrick={deleteSkaterTrick}/>)
    :(<ul  onClick={() => handleClick(trick)} className="trickTitle">{trick.name}</ul>)}
  <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
        ✏️
      </button>
      <button onClick={() => deleteSkaterTrick()}>
        🗑️
      </button>
      </div>
  )
}
