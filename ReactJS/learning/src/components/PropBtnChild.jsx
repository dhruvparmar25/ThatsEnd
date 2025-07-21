import React from 'react'

export function PropBtnChild({text,onClick}) {
  return (
    <>
    <button style={{border:"1px solid ", padding:"5px"}} onClick={onClick}>{text}</button>
    </>
  )
}

