import React, { useState } from "react";
import "../App.css";

let nextId = 0;
function TODO() {
  const [todo, setTodo] = useState([]);
  const [inputVal, setinputVal] = useState("");

  const handelChange = (e) => {
    setinputVal(e.target.value);
  };
  const handelAdd = () => {
    setTodo([
      ...todo,
      {
        id: nextId++,
        date: new Date(),
        task: inputVal
      }
    ]);
    alert("Task Added.....")
    setinputVal("");
  };

  const handelRemove =(itemId)=>{
    const fltrData = todo.filter((a)=>a.id !== itemId)
    setTodo(fltrData)
  }

  return (
    <div>
      <label>
        <h1
          style={{
            textAlign: "center",
            background: "black",
            color: "white",
            width: "80%",
            margin: "auto",
          }}
        >
          TODO
        </h1>
        <div
          style={{
            display: "flex",
            width: "70%",
            margin: "auto",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="addTask "
          >
            <div style={{ textAlign: "center" }}>
              <h2 className="title">ADD Task</h2>
              <textarea
                placeholder="Enter your Task here..."
                rows={4}
                value={inputVal}
                onChange={handelChange}
                style={{
                  padding: "10px",
                  border: "none",
                  borderRadius: "10px",
                }}
                type="text"
              />
              <button
                onClick={handelAdd}
                style={{
                  marginLeft: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "black",
                  border: "none",
                  color: "white",
                }}
              >
                ADD+
              </button>
            </div>
          </div>
          <div className="pendingTask">
            <div
              style={{
                width: "90%",
                margin: "auto"
              }}
            >
              <div className="title">
                <h1>Pendiing Task</h1>
                <ul>
                  {todo.map((item) => {
                    return (
                      <li key={item.id}>
                        <p>{new Date(item.date).toLocaleString()}</p>
                        <h2>{item.task}</h2>
                      <button onClick={()=>handelRemove(item.id)}>remove</button>

                      </li>
                    );
                      
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="completeTask"></div>
        </div>
      </label>
    </div>
  );
}

export default TODO;
