import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className='Navbar'>Navbar:
    <Link to="/">Home</Link>
    <Link to="/puppy">Puppy page</Link>
    <Link to="/search">Search result</Link>
  </div>
  )
}

export default Navbar