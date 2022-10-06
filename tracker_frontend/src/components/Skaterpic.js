import React from 'react'

export default function Skaterpic({skater, setActive, setFirstVideo}) {
  function handleClick() {
    setActive(skater)
  }
  return (
    <div className="skater-thumb"><img style={{height: '100px', width: '100px'}} src={skater.profile}
        onClick={handleClick}
        />
        
        
        </div>
  )
}

// onclick = handlclick  in handlclick set activeskater to skater 
// 