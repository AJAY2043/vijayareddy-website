import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-title">
        <Link to='/' style={{ textDecoration: 'none' }} ><h2>Vijaya Reddy's</h2></Link>
      </div>
      <div className="nav-search">
        <input type='text' placeholder='know more about me...'/>
      </div>
      <div className="nav-about">
        <Link to='/aboutme' style={{ textDecoration: 'none' }}><h3>AboutMe</h3></Link>
      </div>
      <div className="nav-collab">
        <Link to='/collabrationsWithMe' style={{ textDecoration: 'none' }}><h3>Collabtrate with me </h3></Link>
      </div>
      <div className="nav-contact">
        <Link to='/contactme' style={{ textDecoration: 'none' }}><h3>ContactMe</h3></Link>
      </div>
      <div className="nav-blog">
        <Link to='/myblogs' style={{ textDecoration: 'none' }}><h3>My Blog</h3></Link>
      </div>
    </div>
  )
}

export default Navbar
