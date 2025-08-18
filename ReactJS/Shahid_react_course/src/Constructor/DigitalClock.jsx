import React, { useEffect, useState } from "react";
import "../App.css";

function DigitalClock() {
    const [blockClr, setBlockClr] = useState("black")
    const [textClr, settextClr] = useState("white")
    const [digi, setDigi] = useState(new Date())
    useEffect(() => {
        // let clock = new Date();
        // setDigi(clock)
        const intervalID=setInterval(() => {
            setDigi(new Date());
        }, 1000);
        return()=>clearInterval(intervalID);
    });
    return (
        <div>
            <h1>DigitalClock</h1>
            Select Time Color :{" "}
            <select onChange={(e) => settextClr(e.target.value)} name="timer">
                <option>Select Field-------</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="purple">purple</option>
            </select>
            <br /> <br />
            Select Background Color :
            <select onChange={(e) => setBlockClr(e.target.value)} name="block">
                <option>Select Field-------</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="purple">purple</option>
            </select>
            <div style={{ marginTop: "1rem" }} className="block">
                <div style={{ backgroundColor: blockClr,borderRadius:"10px" }} className="timer">
                    <div style={{ color: textClr }} className="time">
                        <h3>{digi.toLocaleTimeString()}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DigitalClock;
