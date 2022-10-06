import React from 'react'
import './Skaterinfo.css'
import './Homepage.css'

export default function Skaterdetails({skater}) {
  return (
    <div classname="skaterdetails">
        <img src={skater.full_shot} />
        <h1 className='Cardname'>{skater.name}</h1>
        </div>
  )
}
