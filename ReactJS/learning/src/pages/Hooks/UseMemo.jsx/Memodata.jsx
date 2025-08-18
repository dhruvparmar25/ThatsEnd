import React,{useState,useMemo} from 'react'

function Memodata() {
const [num, setnum]= useState(0);
const [todos, setTodos]= useState([]); 
const [val, setVal]= useState(""); 

//const calculation = expensiveNumber(num)
//const cubeVal = findNumberCube(val)
const calculation = useMemo(()=>
    expensiveNumber(num)
,[num])

const cubeVal = useMemo(()=>
  findNumberCube(val)
,[val])

const handleClick =()=>{
   setTodos([...todos,'New text']) 
}

//console.log(todos);

function expensiveNumber(number){
    
console.log("function call.....");
for(let i=0;i<=10000000;i++){
    
    number = number+1
}
return number
}

function findNumberCube (value){
  console.log("cube function ....");
  
  let powerCube = Math.pow(value,3)
  return powerCube
}

//console.log(calculation);

  return (
    <div>
        <h1>Learn about useMemo</h1>
        <h2>count : {num}</h2>
        <button onClick={()=>setnum(num+1)}>Increment++</button>
        <div>
        {todos.map((item)=>{
            return(
                <li>{item}</li>
            )
        })}
        <button onClick={handleClick}>Add Todo</button>
        <h1>{calculation}</h1>
        <h2>Number cube is : {cubeVal}</h2>
        <input value={val} onChange={(e)=>setVal(e.target.value)}/>
        </div>
    </div>
  )
}

export default Memodata