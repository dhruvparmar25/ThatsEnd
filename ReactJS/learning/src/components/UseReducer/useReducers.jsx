import React, { useReducer } from 'react'

const CounterReducer  = (state, action) => {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function UseReducers() {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={()=>dispatch({type:'inc'})}>inc</button>
      <button onClick={()=>dispatch({type:'dec'})}>dec</button>

    </div>
  )
}

export default  UseReducers;