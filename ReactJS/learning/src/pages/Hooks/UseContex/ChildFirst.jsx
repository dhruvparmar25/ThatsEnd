import React from 'react'
import ChildSecound from './ChildSecound'

function ChildFirst() {
  console.log("compo-2");
  
  return (
    <div>
      <h1>ChildFirst</h1>
      <ChildSecound />
    </div>
  )
}

export default React.memo(ChildFirst)