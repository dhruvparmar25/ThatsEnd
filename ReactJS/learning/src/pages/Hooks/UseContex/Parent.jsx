import React, { createContext, useState } from 'react'
import Child from './Child'
import { UserContextVal } from './myContex';

const UserContext = createContext();

function Parent() {
    const [text, setText] = useState("Helllo")
    return (

        <UserContextVal.Provider value={[text, setText]}>
            <h1>Parent {text}</h1>
            <Child text={text} />
        </UserContextVal.Provider>


    )
}

export default Parent