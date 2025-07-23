import React, { useState } from "react";

function UseState() {
  // const [color, setColor] = useState("red");
  // const [car, setCar] = useState({
  //   name: "BMW",
  //   color: "Red",
  //   model: 2022,
  // });

  // const Updatecolor = () => {
  //   setCar((prvColor) => {
  //     return { ...prvColor, color: "Pink" };
  //   });
  // };

  const [to, setTo] = useState("Dhruv");
  const [mess, seMess] = useState("Hello");
  const [score, setScore] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You Said ${mess} to ${to}`);
    });
  }

  // function Increment() {
  //   setScore(score=>score + 1);
  // }
  return (
    <>
      {/* <h1 className="justify-center flex content-center text-center text-5xl">
        UseState
      </h1>

      <h2>MY favourite color is {color}</h2>

      <button type="button" onClick={() => setColor("Blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("Black")}>
        Black
      </button>

      <h2>
        MY car name is <span className="font-bold"> {car.name} </span> is color
        is <span className="font-bold">{car.color}</span> buy in
        <span className="font-bold"> {car.model}</span>
      </h2>
      <button type="button" onClick={() => setCar({ ...car, color: "PInk" })}>
        Chnage color
      </button> */}
      <form onSubmit={handleSubmit} className="p-2 text-center">
        <label>
          TO:{" "}
          <select
            className="border-1 ml-2 "
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="ALice">Alice</option>
            <option value="Bob">Bob</option>
          </select>
        </label>{" "}
        <br /> <br />
        <textarea
          className="border-1 p-1"
          value={mess}
          onChange={(e) => seMess(e.target.value)}
          placeholder="Message"
        ></textarea>
        <br />
        <br />
        <button type="submit">Send</button></form><br /><br />
        <button    onClick={() => {
            setScore(score=>score + 1)
          }}>+1</button>{" "}
        <button
          onClick={() => {
            setScore(score=>score + 3)
          }}
        >
          +3
        </button>
        <h2>score : {score}</h2>
    </>
  );
}

export default UseState;
