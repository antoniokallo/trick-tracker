import React from 'react'
import './Skaterinfo.css'
import './Homepage.css'

export default function Skaterdetails({skater}) {
 console.log(skater)
  return (
    <div>
      
        <img className="card" src={skater.full_shot} />
        <h1 className='Cardname'>{skater.name}</h1>
        <div>
          <p className='Sk8rDescription'>{skater.description}</p>
          </div>
        </div>
      
  )
}
