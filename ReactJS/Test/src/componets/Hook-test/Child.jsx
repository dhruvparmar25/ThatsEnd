import React from 'react'

function Child({ ages, sals,age,salary }) {
    console.log("Child Rendered "); 

    return (
        <div>
            <h4 className='text-center text-2xl  uppercase bg-zinc-800 text-white w-fit p-1 m-auto rounded '>
                Child
            </h4>
            <section className='rounded w-fit p-5 m-auto bg-blue-200'>
              <p>Age:{age}</p>
                <button onClick={ages}>Age++</button>
                <p>Salary : {salary}</p>
                <button onClick={sals}>Salary++</button>
            </section>
        </div>
    )
}

export default React.memo(Child)
