import React, { useState } from 'react'
/*
Exercise 1:
Create a React component that displays a counter number 3.
Add two buttons: one to increment the counter and one to decrement it.
when click on increment button count increment  by 3
when click on decrement button count decrement  by 3
 
Exercise 2:
Create a React component with a text input field.
Display the value of the input field when onchange in input.
 
Exercise 3:
Hide Show functionality like,
Initially display paragraph and when click on button then paragraph hide also change button text when click on button.
The button text should change based on whether the text is visible or hidden.
 
Exercise 4:
Create a React component with two input fields: one for the user's name and one for their age.
Display the both input values of the user
*/
function Test2() {
  /* E-1 */
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 3);
  }
  const decrement = () => {
    if (count > 0) {
      setCount(count - 3);
    }
  }
  /* E-2 */
  const [inputVal, setInputVal] = useState("")
  const handelChange = (e) => {
    setInputVal(e.target.value)
  }
  /* E-3 */
  const [isValue, setIsValue] = useState(true)
  const handelOn = () => {
    setIsValue((prev) => !prev);
  }
  /*E-4 */
  const [user, setUser] = useState({ name: "", age: "" });
  const userChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <section className='exercise-1'>
        <h1>Exercise-1</h1>
        <button onClick={increment}>
          increment 3+
        </button>
        <h1>{count}</h1>
        <button onClick={decrement}>
          decrement 3-
        </button>
      </section>
      <section className='exercise-2'>
        <h1>Exercise-2</h1>
        <input type="text" value={inputVal} onChange={handelChange} />
        <p>{inputVal}</p>
      </section>
      <section style={{ width: "550px",textAlign:"center" ,    display: "inline-block"}} className='exercise-3'>
        <h1>Exercise-3</h1>
        <div >{isValue ? <p if style={{ width: "550px",textAlign:"center" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere commodi dolorem molestias eum expedita id, excepturi quidem explicabo facilis distinctio voluptates, quae incidunt officia, nihil eius. Ex magni tempore qui molestiae tempora incidunt, labore esse dolore, rem nam provident dignissimos omnis pariatur debitis ut? Eveniet necessitatibus reprehenderit ducimus blanditiis tempora.
        </p> : null}</div>
        <button onClick={handelOn}>{isValue ? "hide" : "Show"}</button>
      </section>
      <section className='exercise-4'>
        <h1>Exercise-4</h1>
        <label >User Name</label>
        <input name="name" onChange={userChange} value={user.name} />
        <label >age</label>
        <input name='age' onChange={userChange} value={user.age} type="text" />
        <p>User Name is <strong> {user.name}</strong> and age is <strong>{user.age}</strong></p>
      </section>
    </div>
  )
}

export default Test2