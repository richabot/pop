import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, Navigate, useNavigate } from 'react-router-dom'
import PuppyPage from './PuppyPage'

export const Home = () => {
     // eslint-disable-next-line
const [dataa,setData]=useState([])
const [search,setsearch]=useState("")
const Navigate=useNavigate()
//    axios.get("https://dog.ceo/api/breeds/list/all")
//     .then((r)=>{
//        setData(r.message)
//     })
// const handlepuppy=(d)=>{
//     setsearch(d)
//     console.log(search,"search")
   
    
//     }
     
useEffect(() => {
    axios.get('https://dog.ceo/api/breeds/list')
    .then(response => {
     setData(response.data.message)
     
    })
    


}, [])

 


  return (
    <div>
       <div>
        {dataa.map((d)=>(
             <Link key={d} to={`/puppy/${d}`}>{d}
             <PuppyPage d={d}/></Link>
            // <div onClick={handledata(d)}>{d}</div>
        ))}
       </div>
      
    </div>
  )
}
