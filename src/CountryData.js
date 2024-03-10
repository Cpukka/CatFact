import React, { useEffect, useState } from 'react'



export default function CountryData() {
const [country,setCountry]= useState('')
useEffect(()=> {
    fetch('restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>setCountry(data));

},[]);

   


  return (
    <div>
      <p>{country}</p>
    </div>
  )
}
