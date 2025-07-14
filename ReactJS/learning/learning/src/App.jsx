import { useState } from "react";
import "./App.css";
import ArrayFun from "./pages/ArrayFun";
import ArrayMap from "./pages/ArrayMap";
import Destructuring from "./pages/Destructuring";
import ArrayInProps from "./pages/Props/ArrayInProps";
import ObjectData from "./pages/Props/ObjectData";
import PropsInReact from "./pages/Props/PropsInReact";
import StateAsProps from "./pages/Props/StateAsProps";
import SpreadOp from "./pages/SpreadOp";
import TernaryOperator from "./pages/TernaryOperator";
function App() {
  const [stdName, setstdName] = useState("Dhruv Parmar");
  const university = ["vsngu", "su", "gtu"];
  const employee = {
    name: "Dhruv",
    salary: 57668,
    age: 35,
    email: "parmar35@gmail.com",
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        React-Js Learning
      </h1>
      <div className="pl-10 flex justify-items-start gap-8">
        <div className="first">
          <ArrayFun />
          <SpreadOp />
          <Destructuring />
          <TernaryOperator />
          <ArrayMap />
          <PropsInReact empName="Dhruv" />
        </div>
        <div className="secound">
          <ObjectData user={employee} />
          <ArrayInProps uni={university[1]} />
          {stdName && <StateAsProps std={stdName} />}
          <button className="border p-1" onClick={() => setstdName("Darbar")}>Change Name</button>
        </div>
      </div>
    </>
  );
}

export default App;
