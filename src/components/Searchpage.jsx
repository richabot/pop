import React from 'react'
import { useState } from 'react'
import axios from "axios"
const Searchpage = () => {
    const [sea,setsea]=useState("")
    const [search,setsearch]=useState([])
    const handlesearch=(event)=>{
        setsea(event.target.value,"value")
    }

const handlepups=()=>{
    axios.get(`https://dog.ceo/api/breed/${sea}/images`)
    .then(response => {
    //  setImages(response.data)
    setsearch(response.data.message)

    })

     
}

  return (
    <div>Searchpage
        <input type="text" onChange={handlesearch} />
        <button onClick={handlepups}></button>
        <div>
        {search.map((d)=>(
            
            <div> 
                <img src={d} alt="as" />
            </div>

        ))}
       </div>
    </div>
  )
}

export default Searchpage