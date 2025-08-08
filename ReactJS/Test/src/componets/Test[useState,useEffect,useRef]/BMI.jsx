import React, { useState } from 'react'

function BMI() {
    const [w_val, setW_val] = useState(null)
    const [h_val, setH_val] = useState(null)
    const [BMI, setBMI] = useState(null)
    const [display, setDisplay] = useState("")


    const handelClick = (e) => {
        e.preventDefault();
        const converHightintoMtr = h_val / 100

        const CalculateBMi = +(w_val / (converHightintoMtr * converHightintoMtr)).toFixed(2)

        setBMI(CalculateBMi);
        if (CalculateBMi < 18.5) {
            setDisplay("Underweight")
        } else if (CalculateBMi >= 18.5 && CalculateBMi < 25) {
            setDisplay("Normal Weight")
        } else if (CalculateBMi >= 25 && CalculateBMi <= 29.9) {
            setDisplay("Overweight")
        } else {
            setDisplay("Obese")
        }
    }
    return (
        <div >
            <div className='BMS'>
                <h1 className='title'>Body Mass Index</h1>
                <div className='bmsField'> 
                    <label  >Height :- </label>
                    <input value={h_val} onChange={(e) => (setH_val(+e.target.value))} type="number" /></div>
                <div className='bmsField'>
                    <label >Width :- </label>
                    <input value={w_val} onChange={(e) => (setW_val(+e.target.value))} type="number" /></div>
                <button type='submit' onClick={handelClick}> BMi</button>
                <div className='output'>
                    <p >BMI :- <span style={{color:"red",backgroundColor:"black"}}>{BMI}</span></p>
                    <p > display message :- <span style={{color:"red",backgroundColor:"black"}}>{display}</span></p>
                </div>

            </div>
        </div>
    )
}

export default BMI