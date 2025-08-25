import React from 'react'
import ChildFirst from './ChildFirst'

function Child() {
  console.log("Compo - 1");
  
  return (
    <div>
      <h1>Child</h1>
      <ChildFirst/>
      </div>
  )
}

export default React.memo(Child)