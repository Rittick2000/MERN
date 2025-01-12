import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <ul>
            <li><NavLink className={({isActive})=>isActive? "active-link": ""} to='/'>Home</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active-link": ""} to='/About'>About</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active-link": ""} to='/Dashboard'>Dashboard</NavLink></li>
            <li><NavLink className={({isActive})=>isActive? "active-link": ""} to='/Students/123'>Students</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar