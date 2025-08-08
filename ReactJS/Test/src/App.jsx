import React from "react";
import "./index.css";
import Test from "./componets/Test";
import Test2 from "./componets/Test2/Test2";
import DisplayTimer from "./componets/Test[useState,useEffect,useRef]/DisplayTimer";
import BMI from "./componets/Test[useState,useEffect,useRef]/BMI";
import Form from "./componets/Test[useState,useEffect,useRef]/Form";
import Toggel from "./componets/Toggel";
import StopWatch from "./componets/Test[useState,useEffect,useRef]/StopWatch";


function App() {  
  return (
    <>
     {/* 
     <Test/>
     <Test2/>
      */}
    <div className="test3" >
      <Toggel label="Timer">
        <DisplayTimer/>
        </Toggel>
        <Toggel label="BMI">
      <BMI/>

        </Toggel>
        <Toggel label="form">
      <Form/>

        </Toggel>
        <Toggel label="StopWatch">
          <StopWatch />
        </Toggel>
    </div>
    </>
  );
}

export default App;
