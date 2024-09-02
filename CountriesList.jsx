import React from 'react'
import Counterydata from '../Counterydata'
import Counterycard from './Counterycard'


export default function CountriesList() {



  const array =
    Counterydata.map((countery) => {
      console.log(countery);
      
      return < Counterycard
        key={countery.id}
        name={countery.name}
        flag={countery.flag}
        population={countery.population}
        capital={countery.capital}
        currency={countery.currency}

      />
    })
  // console.log(array)


  return <div className='countrise-container'>
    {array}
  </div>

}
