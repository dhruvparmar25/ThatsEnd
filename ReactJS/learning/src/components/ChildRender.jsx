import React from 'react'

function ChildRender({ispack,item}) {
  if(ispack===true){
return (
    <>
    <li>{item}</li></>
  )
  }
  
}

export default ChildRender