import React, {useState} from 'react'

function InputBoxData() {
    const [value,setVal]=useState("");
  return (
    <>
    <label className='text-2xl'>Input BoX Data</label><br />
    <input className='border-2 p-2 mt-2'value={value} type="text" onChange={(event)=>setVal(event.target.value)
    } placeholder='Enter Text' />
    <h1>{value}</h1>
    <button className='border-2 mt-2 p-2' onClick={()=>setVal("")}>Reset Form</button>
    </>
  )
}

export default InputBoxData