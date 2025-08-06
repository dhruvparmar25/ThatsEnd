import React from 'react'

function CurrentDate() {
    const currentDate=new Date();
    const day=currentDate.getDate();
    const month=currentDate.getMonth()+1;
    const year=currentDate.getFullYear();
  return (
    <div>
        <h1>Date & Time</h1>
        <h1>{currentDate.toString()}</h1>
        <h1>Date:<span style={{color:"green"}}>{currentDate.toDateString()}</span></h1>
        <h1>Time:<span style={{color:"green"}}>{currentDate.toTimeString()}</span></h1>
        <h1 style={{color:"blue"}}>Local Date :{currentDate.toLocaleDateString()}</h1>
        <h1 style={{color:"blue"}}>Local time:{currentDate.toLocaleTimeString()}</h1>
        <h1>date:{day}</h1>
        <h1>month:{month}</h1>
        <h1>year:{year}</h1>
        <h2>date : {day}/{month}/{year}</h2>


    </div>
  )
}

export default CurrentDate