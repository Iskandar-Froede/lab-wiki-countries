import React from 'react'
import { Link } from 'react-router-dom';

function CountriesList({listCountries}) {

  return (
   
    <div>
    {listCountries.map((country) => {
        return country.name.official
    })
    }
    </div>
  )
}

export default CountriesList