import React, { useEffect, useState } from 'react'
import axios from "axios"

export const Home = () => {
     // eslint-disable-next-line
const [dataa,setData]=useState([])

//    axios.get("https://dog.ceo/api/breeds/list/all")
//     .then((r)=>{
//        setData(r.message)
//     })
  
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list')
    .then(response => {
     setData(response.data.message)
     
    })
    


}, [])

 



  return (
    <div>
       <div>
        {dataa.map((d)=>{
            <div>{d}</div>
        })}
       </div>
    </div>
  )
}
