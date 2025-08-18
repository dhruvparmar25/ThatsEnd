import React, { useRef, useState } from 'react'
import { useEffect } from 'react';


function UseRef() {
    const [count, setCount] = useState(0)
    const input = useRef(null)
    const incCount = useRef(0)
    useEffect(() => {
        incCount.current = count
    }, [count])

    const handelClick = () => {
        input.current.focus();
        input.current.style.backgroundColor="black"
        input.current.style.color="white"
        input.current.style.border="none"

        

        
        console.log(input.current.style.backgroundColor);
        
    }

    return (
        <div>
            <h1>useRef Example</h1>
            <input type="text" value="123" ref={input} />
            <button onClick={handelClick}>handelClick</button>
            <h1>Previous value:{incCount.current}</h1>
            <h1>Current Value : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Count Increment</button>
        </div>
    )
}

export default UseRef