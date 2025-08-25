import React, { 
     useContext } from 'react'
import { UserContextVal } from './myContex';

function ChildSecound() {
    console.log("com-3");
    
    const [user, setUser] = useContext(UserContextVal); 

    return (
        <div>
            <h1>ChildSecound {user}</h1>
            <button onClick={()=>setUser("Bye")}>Update</button>
        </div>
    )
}

export default ChildSecound;
