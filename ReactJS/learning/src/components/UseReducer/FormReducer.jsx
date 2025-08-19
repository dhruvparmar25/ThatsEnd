import React, { useReducer } from 'react'
const intialstate = { name: "", age: "", submit: false }
const FormReducers = (state, action) => {
    console.log("state",state);
    console.log("action-type",action);

    switch (action.type) {
    
        case 'F-name':
            return {
                ...state,
                name: action.payload
            };
        case 'F-age':
            return {
                ...state,
                age: action.payload
            };
        case 'F-submit':
            return {
                ...state,
                submit: true
            };
    }
    
}
function FormReducer() {
    const [stae, dispatch] = useReducer(FormReducers, intialstate);
console.log("FormReducer",FormReducer);
console.log("intialstate",intialstate);



    const handelClick = () => {
        dispatch({ type: "F-submit" })
    }

    return (
        <div>
            <h1>Form</h1>
            <div className='flex-row mb-10px'>
                Name : <input type="text" value={stae.name} onChange={(e) => dispatch({ type: 'F-name', payload: e.target.value })} /><br />
                age : <input type="number" value={stae.age} onChange={(e) => dispatch({ type: 'F-age', payload: e.target.value })} /><br />
                <button onClick={handelClick}>Submit</button>

                <hr />
                Name : {stae.name} <br />

                age : {stae.age}
                {stae.submit && <p>Form SUbmited</p>}

            </div>
        </div>
    )
}

export default FormReducer