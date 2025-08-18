import React, { useState } from 'react'


function State() {
    /* Multiple State Variables */
    const [name, setName] = useState("Dhruv");
    const [age, setage] = useState(24)
    /* Object State with Spread Operator */
    const [user, setUser] = useState({ name: "Dhruv", age: 24 })
    /* Handling Form with Multiple State Variables */
    const [email, setEmail] = useState("")
    const [mes, setMes] = useState("")
    /* Handling Form with Multiple State Variables */
    const handelAge = () => {
        setUser(prev => (
            {
                ...prev,
                age: prev.age + 1
            }
        ))
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        alert(`my email id is  ${email} and message is ${mes}`)
    }
    /* Updating Array in State */
    const [tasks, setTasks] = useState(["Buy groceries"]);
    const [input,setInput]=useState("")

    const addTask = ()=>{
        setTasks(
            prev=>[
                ...prev,
                input
            ]
        )
    }
//  Toggle Boolean State
const [ison,setIson]= useState(false)
// Controlled Checkbox with State
const [check,setCheck]=useState(false);
    return (
        <div>
            <h1> State concept</h1>
            {/* Multiple State Variables */}
            <h2>Multiple State Variables</h2>
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
            Age:<input type="number" value={age} onChange={(e) => { setage(e.target.value) }} />
            {/* Object State with Spread Operator */}
            <h2>Object State with Spread Operator</h2>
            <h3>{user.name}-{user.age}</h3>
            <button onClick={handelAge}>+++ Age</button> <br />
            {/* Handling Form with Multiple State Variables */}
            <h2>Handling Form with Multiple State Variables</h2>
            <form onSubmit={handelSubmit}> <br />
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter Your Email...' /> <br /> <br />
                <textarea value={mes} onChange={(e) => setMes(e.target.value)} name="message" placeholder='Write Your Message'></textarea> <br />
                <button type="submit">Submit</button>
            </form>
            {/* Updating Array in State */}
            <h2>Updating Array in State</h2>
            <div >
                <ul style={{listStyle:"none"}}>
                    {tasks.map((tasks, i) => 
                     <li  key={i}>
                                {tasks}
                            </li>
                        )
                    }
                </ul>
                <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                <button onClick={addTask}>Add Task</button>
            </div>
            {/*  Toggle Boolean State */}
            <h2>Toggle Boolean State</h2>
            <div>
               {ison ? <p>Light is on</p>: <p>Please log in</p>}
                <button onClick={()=>setIson(!ison)}>{ison?"on":"off"}</button>
            </div>
            {/* Controlled Checkbox with State */}
            <div>
                <input type="checkbox" checked={check} onChange={()=>setCheck(!check)} />
                <label >I accept terms</label>
            </div>
        </div>
    )
}

export default State