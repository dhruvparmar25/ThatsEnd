import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodo] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count])

    const handelClick = () => {
        setTodo((t) => [...t, "newtodo"])
    }
    return (
        <div>
            <h1>learn USEMEMO</h1>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment ++</button></div>
            <div>
                {todos.map((todo) => {
                    return <li key={todo.id}>{todo}</li>
                })}
                <button onClick={handelClick}>Add Todo</button>
            </div>
            <div>
                <h1>{calculation}</h1>
            </div>
        </div>

    )

}
const expensiveCalculation = (num) => {
    console.log("Calculation..........");

    for (let i = 0; i <= 100000; i++) {
        num += 1;
    }
    return num
}

export default UseMemo