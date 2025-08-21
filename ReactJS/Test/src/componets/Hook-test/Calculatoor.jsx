import React, { useState } from "react";
import "../../index.css";

function Calculatoor() {
    const [input,setInput]=useState("")

    const handelclick =(value)=>{
        setInput(input + value)
        
    }
    const Eqal =()=>{
        setInput(eval(input).toString())
    }
    const Del=()=>{
        setInput(input.slice(0,-1))
    }
    return (
        <div>
            <h1 className="text-center text-5xl mt-3  mb-3 uppercase bg-zinc-800 text-white w-fit p-3 m-auto rounded">Calculatoor</h1>
            <section className="rounded bg-blue-200 p-2 w-fit m-auto" >
                <div className="calculator">
                    <input  value={input} readOnly className="border-1" type="text" />
                </div> 
               <div className="btn-grp">
                    <button onClick={()=>setInput("")}>clear</button>
                    <button onClick={Del}>Delete</button>
                    <button onClick={()=>handelclick(".")}>.</button>
                    <button onClick={()=>handelclick("/")}>/</button>
                </div>
                <div className="btn-grp">
                    <button onClick={()=>handelclick("7")} >7</button>
                    <button onClick={()=>handelclick("8")} >8</button>
                    <button onClick={()=>handelclick("9")}>9</button>
                    <button onClick={()=>handelclick("*")}>*</button>
                </div>
                <div className="btn-grp">
                    <button onClick={()=>handelclick("4")}>4</button>
                    <button onClick={()=>handelclick("5")}>5</button>
                    <button onClick={()=>handelclick("6")}>6</button>
                    <button onClick={()=>handelclick("-")}>-</button>
                </div>
                <div className="btn-grp">
                    <button onClick={()=>handelclick("1")}>1</button>
                    <button onClick={()=>handelclick("2")}>2</button>
                    <button onClick={()=>handelclick("3")}>3</button>
                    <button onClick={()=>handelclick("+")}>+</button>
                </div>
                <div className="btn-grp">
                    <button onClick={()=>handelclick("0")}>0</button>
                    <button onClick={Eqal}>=</button>
                </div>
            </section>
        </div>
    );
}

export default Calculatoor;
