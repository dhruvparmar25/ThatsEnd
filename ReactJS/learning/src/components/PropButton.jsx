import React from 'react'
import { PropBtnChild } from './PropBtnChild';

function PropButton() {
    const handelClick=()=>{
        alert("Button Clicked");
    }
  return (
    <>
        <h1>Example 3:Passing Function As Prop</h1>
        <PropBtnChild text="Click Me" onClick={handelClick}/>
    </>
  )
}

export default PropButton