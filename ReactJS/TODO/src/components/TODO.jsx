import React, { useState } from "react";
import "../App.css";

let nextId = 0;
function TODO() {
  const [todo, setTodo] = useState([]);
  const [inputVal, setinputVal] = useState("");

  const toggleTask = (id) => {
    const updated = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item);
    setTodo(updated)
  }




  const handelChange = (e) => {
    setinputVal(e.target.value);
  };
  const handelAdd = () => {
    setTodo([
      ...todo,
      {
        id: nextId++,
        date: new Date(),
        task: inputVal,
        isDone: false
      }
    ]);
    alert("Task Added.....")
    setinputVal("");
  };

  const handelRemove = (itemId) => {
    const fltrData = todo.filter((a) => a.id !== itemId)
    setTodo(fltrData)
  }

  return (
    <div>
      <label>
        <h1 className="todo-heading">TODO</h1>
        <div className="main-container">
          <div className="addTask">
            <div className="center-text">
              <h2 className="title">ADD Task</h2>
              <textarea
                placeholder="Enter your Task here..."
                rows={15}
                cols={40}
                value={inputVal}
                onChange={handelChange}
                className="textarea"
              />
              <button className="add-btn" onClick={handelAdd}>
                ADD+
              </button>
            </div>
          </div>

          <div className="pendingTask">
            <div className="task-container">
              <div className="title">
                <h1>Pending Task</h1>
              </div>

              {todo.filter(item => !item.isDone).map((item) => (
                <li key={item.id}>
                  <p>{new Date(item.date).toLocaleString()}</p>
                  <div className="list-task">
                    <input type="checkbox" checked={item.isDone} onChange={()=>toggleTask(item.id)} />
                    <h4 className="desc">{item.task}</h4>
                    <button onClick={() => handelRemove(item.id)}>
                      <img width={"10px"} src="../public/tras.png" alt="delete" />
                    </button>
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className="completeTask">
            <div className="task-container">
              <div className="title">
                <h1>Complete Task</h1>
              </div>
              <ul >
                {todo.filter(item => item.isDone).map((item) => (
                  <li key={item.id}>
                     <p>{new Date(item.date).toLocaleString()}</p>
                 <div className="list-task">
                     <input type="checkbox" checked={item.isDone} onChange={()=>toggleTask(item.id)} />
                    <h4 style={{textDecoration:"line-through"}} className="desc">{item.task}</h4>
                    <button onClick={() => handelRemove(item.id)}>
                      <img width={"10px"} src="../public/tras.png" alt="delete" />
                    </button>
                 </div>
                    </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </label>
    </div>
  );
}

export default TODO;
