import React from 'react'
import Toggel from '../Toggel'
import ToDo from './ToDo'
import Calculatoor from './Calculatoor'
import Fibonacci from './Fibonacci'
import Parent from './Parent'
import Child from './Child'

function Hook() {
  return (
    <div className='max-w-fit m-auto'>
      <Toggel label={"ToDo"}>
        <ToDo />
      </Toggel>
      <Toggel label={"Calculatoor"}>
        <Calculatoor />

      </Toggel>
      <Toggel label={"Fibonacci"}>
        <Fibonacci />

      </Toggel>
      <Toggel label={"Parent"}>
        <Parent />

      </Toggel>

    </div>
  )
}

export default Hook