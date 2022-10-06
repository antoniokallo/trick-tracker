import React from 'react'

export default function Trickdetails({ trick, setActive}) {

  return (
    // console.log(trick.trick)
    <h1 className="trick-text" onClick={() => setActive(trick)}> {trick.name} </h1>
  
  )
}
