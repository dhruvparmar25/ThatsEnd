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
     
     <Test/>
     <Test2/>
     
    <div className="test3" >
    <h1 style={{position:"absolute",fontSize:"300PX",width:"95%", marginTop:"5rem",letterSpacing:"120px",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>TEST-3</h1>
<div className="ddd" style={{zIndex:"1000",backgroundColor:"rgba(0, 0, 0, 0.5)"}}>
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
    </div>
    </>
  );
}

export default App;
