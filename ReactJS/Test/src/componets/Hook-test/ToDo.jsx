import React, { useReducer, useState } from 'react'
const initialTask = []
const reducer = (state, action) => {
    console.log("state", state);
    console.log("action", action);
    switch (action.type) {
        case "ADD_TASK":
            return [
                ...state,
                { id: Date.now(), text: action.payload }
            ]
        case "DELETE":
            return state.filter((task) => task.id !== action.payload)
        default:
            return state
    }
}
function ToDo() {
    const [tasks, dispatch] = useReducer(reducer, initialTask)
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (input.trim() !== "") {
            dispatch({ type: "ADD_TASK", payload: input });

        }
        setInput("");
    };
    return (
        <>

            <section className='rounded w-fit p-5 m-auto bg-blue-200'>
                <h1 className='            <h1 className="text-center text-2xl  uppercase bg-zinc-800 text-white w-fit p-1 m-auto rounded">Calculatoor</h1>
'  >Hook Test</h1>
                <h1 className='text-5xl text-start mb-5'>To-Do List</h1>
                <input className='rounded p-2 bg-white' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className='border-1 ml-3 p-1 rounded' onClick={handleAdd} >Add task</button>
                <div >
                    {tasks.map((item) => (
                        <li className='flex  font-bold justify-between items-center mt-1.5 p-1 bg-blue-300 rounded' key={item.id}>{item.text}
                            <button className='border-1 p-[2px] text-[12px] rounded bg-black text-white border-none' onClick={() => dispatch({ type: "DELETE", payload: item.id })}>Remove</button></li>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ToDo