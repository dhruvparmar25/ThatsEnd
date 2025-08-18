import React, { useRef, useState } from 'react'

function Stopwatch() {
    const [startTime,setStartTime]=useState(null);
    const [now,setNow]=useState(null);
    const intervalRef=useRef(null);

    const handleStart =()=>{
        setStartTime(Date.now());
        setNow(Date.now());
        clearInterval(intervalRef.current);

        intervalRef.current=setInterval(()=>{
            setNow(Date.now());
        },10)
    }

    const handleStop=()=>{
        clearInterval(intervalRef.current);
    }

    let secPass=0;
    if (startTime!= null && now!=null) {
        secPass=(now-startTime)/1000;
    }

  return (
    <div>
        <h1>Stopwatch</h1>
        <h1>Time Passed : {secPass.toFixed(3)}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        </div>
  )
}

export default Stopwatch