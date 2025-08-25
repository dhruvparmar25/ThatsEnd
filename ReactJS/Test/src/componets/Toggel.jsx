import React, { useState } from 'react'

function Toggel({ children, label }) {
    const [show, setShow] = useState(true)
    const handelToggel = () => {
        setShow(!show)
    }
    return (
        <div className='flex-row justify-center items-center'>
            <button style={{ width: "fit-content", backgroundColor:  show?"red": "green" ,color:"white"}} onClick={handelToggel}>
                {show ? `Hide ${label}` : `Show ${label}`}</button>
            {show && <div>{children}</div>}
        </div>
    )
}

export default Toggel 