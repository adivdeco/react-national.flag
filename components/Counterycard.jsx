import React from 'react'

export default function Counterycard(
  { name },
  { flag },
  { population },
  { capital },
  { currency }
  ) {
  
  return (

    <>
      
      <div className="card">
        <div className="img">
          <img src={ flag } alt= {name} srcSet="" />
        </div>
        <div className="data">
          <h2>harsh{ name}</h2>
          <p>population:{population.toLocaleString('en-IN')}</p>
          <p> currency:{ currency}</p>
          <p>Capital:{capital}</p>
        </div>
      </div>
      
    </>
  )
}



