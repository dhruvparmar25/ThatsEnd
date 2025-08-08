import React, {  useRef, useState } from 'react'

function StopWatch() {
const [startTime,setStartTime]=useState(null)
const [now,setNow]=useState(null)
const intervalRef =useRef(null)

const handelStart = ()=>{
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)

    intervalRef.current=setInterval(() => {
    setNow(Date.now())
    }, 10);

}
const handelStop = ()=>{
    clearInterval(intervalRef.current)

}

let secound =0;
if (startTime != null && now != null) {
    secound=(now-startTime)/1000;
}
    return (<>
        <div className='stopwatch'>
            <h1 className="title">StopWatch</h1>

            <div className="display">
{secound.toFixed(3)}
            </div>
         <div className="btn-group">
               <div className="strbtn"><button onClick={handelStart}>Start</button></div>
            <div className="stopbtn"><button onClick={handelStop}>Stop</button></div>
         </div>
        </div>
    </>
    )
}

export default StopWatch