import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Navbar() {
    return (
        <div> 
            <nav className=' flex justify-start gap-[50px] ' >
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/">Home</NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about">About</NavLink>
                <NavLink className={(e)=>{return e.isActive?"red":""}}  to="/contact">Contact</NavLink>
            </nav>
        </div>
    )
}

export default Navbar