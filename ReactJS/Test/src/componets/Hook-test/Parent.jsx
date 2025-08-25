import React, { useCallback, useState } from 'react'
import Child from './Child'

function Parent() {
    const [age, setAge] = useState(0)
    const [sal, setSal] = useState(0)
    const [inp, setInp] = useState("")

    const handelAge = useCallback(() => {
        setAge((age) => age + 5)
    }, [age])

    const handelSalary = useCallback(() => {
        setSal((sal) => sal + 100)
    }, [sal])

    return (
        <div>


            <section className='rounded w-fit p-5 m-auto bg-blue-200'>
                <h1 className='text-center text-2xl  uppercase bg-zinc-800 text-white w-fit p-1 m-auto rounded mb-3'>
                    Parent
                </h1>
                <div>
                    <label htmlFor="">Name : -</label>
                    <input
                        className='b-1 bg-white pl-2 rounded ml-3'
                        type="text"
                        value={inp}
                        onChange={(e) => setInp(e.target.value)}
                    />
                    <p>Name : {inp}</p>
                </div>
                <Child ages={handelAge} sals={handelSalary} age={age} salary={sal} />



            </section>
        </div>
    )
}

export default Parent
