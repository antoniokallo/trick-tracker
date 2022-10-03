import React from 'react'

export default function Test({data, cardIndex}) {
  return (
 
        <div>
            
    {data[cardIndex].map( item => (
    <div className='card'>
    <h1>{item.title}</h1>
    <p>{item.name} </p>
</div>
    ))}
   
    </div>
  )
}
