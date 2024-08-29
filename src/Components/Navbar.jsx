import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
    <div className='conatiner d-flex justify-content-between'>
      <h1>Logo</h1>
      <div className='d-flex gap-3 align-self-center'>
      <Link to="/home" style={{textDecoration:"none",color:"inherit"}}>Home</Link>
      <Link to="/about" style={{textDecoration:"none",color:"inherit"}}>About</Link>
      <Link to="/carrer" style={{textDecoration:"none",color:"inherit"}}>Carrer</Link>
      <Link to="/contact" style={{textDecoration:"none",color:"inherit"}}>Contact</Link>
      <Link to="/review" style={{textDecoration:"none",color:"inherit"}}>Review</Link>
      </div>  
    </div>
    </>
  )
}

export default Navbar