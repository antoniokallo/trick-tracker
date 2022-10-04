import React from 'react'

export default function Skaterpic({skater, setActive}) {
  return (
    <div className="fighter-thumb"><img style={{height: '100px', width: '100px'}} src={skater.profile}
        onClick={() => setActive(skater)}
        />
        
        
        </div>
  )
}
