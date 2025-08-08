import React, { useEffect, useRef, useState } from 'react'

function DisplayTimer() {
    const [time, setTime] = useState(0)
    const intervalRef = useRef(null);

    const hours = Math.floor(time / 360000);
    // console.log(hours);
    const minutes = Math.floor((time % 360000) / 6000);
    // console.log(minutes);
    const seconds = Math.floor((time % 6000) / 100);
    // console.log(seconds);

    const milliseconds = time % 100;
    // console.log(milliseconds);


    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(prev => prev + 1)
        }, 10);
        return () => clearInterval(intervalRef.current)
    }, [])
const handelReset = ()=>{
clearInterval(intervalRef.current)
setTime(0)
}

    return (
        <div>
            <div className='displayRimer'>
                <h1 className='title'>Display  Timer</h1>
                <div className='display'>{hours}:{minutes}:{seconds}:{milliseconds}
                </div>
             <div className="btn-group">
                   <button onClick={() => clearInterval(intervalRef.current)} >Stop</button>
                <button onClick={handelReset}>Reset</button>
             </div>
            </div>
        </div>
    )
}

export default DisplayTimer