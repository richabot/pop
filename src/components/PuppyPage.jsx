import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PuppyPage = () => {
const  {d} =useParams()
console.log(d,"o")
    const [images,setImages]=useState([])
    useEffect(() => {
        axios.get(`https://dog.ceo/api/breed/${d}/images`)
        .then(response => {
        //  setImages(response.data)
        setImages(response.data.message)

        })
        
    
    
    }, [])
    
  return (
    <div>
         <div>
        {images.map((d)=>(
            
            <div> 
                <img src={d} alt="as" />
            </div>

        ))}
       </div>
    </div>
  )
}

export default PuppyPage