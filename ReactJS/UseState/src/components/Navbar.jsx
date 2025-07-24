import React from 'react'
import '../index.css'

function Navbar() {
  return (
  <>
  <nav className='flex item-center justify-between bg-blue-800 w-full'>
    <div className="usercard">
        <label>UserCard</label>
    </div>
    <div className="UserList">
        <label >UserLists</label>
    </div>
  </nav>
  </>
  )
}

export default Navbar