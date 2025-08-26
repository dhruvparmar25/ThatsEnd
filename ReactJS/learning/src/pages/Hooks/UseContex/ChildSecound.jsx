import React, { 
     useContext, 
     useState} from 'react'
import { UserContextVal } from './myContex';

function ChildSecound() {
    console.log("com-3");
    const [count,setCount]=useState(0)
    const [user, setUser] = useContext(UserContextVal); 

    const HandelClick =()=>{
        setCount(count+1)
    }

    return (
        <div>
            <h1>ChildSecound {user}</h1>
            <button onClick={()=>setUser("Bye")}>Update</button>
            <div>
            <p>{count}</p>
            <button onClick={HandelClick}>inc++</button>

            </div>
        </div>
    )
}

export default ChildSecound;
